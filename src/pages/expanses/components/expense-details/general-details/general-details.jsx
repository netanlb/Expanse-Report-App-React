import { Container, Box, Typography } from "@mui/material";
import { customScroll } from "../../../expanses.styled";
import { PieChart } from "../../../../../charts/pieChart";
import Legend from "../../../../../legend/legend";
import {
  SPENT_ON_CATEGORY,
  NUM_OF_EXPENSES,
  GROUP_BY_YEAR,
  GROUP_BY_MONTH,
  GROUP_BY_CATEGORY,
} from "../../../../../utils/datasetLabels";

export default function GeneralDetails({ expenseList, currentFilters }) {
  const calcTotalItems = () => {
    return expenseList.length;
  };

  const calcItemsSum = () => {
    return expenseList.reduce((sum, curr) => {
      return sum + curr.sum;
    }, 0);
  };

  const calcAvgExpense = () => {
    return (calcItemsSum() / calcTotalItems()).toFixed(0);
  };

  const areFiltersSelected = !!(
    currentFilters?.Year ||
    currentFilters?.Month ||
    currentFilters?.Category ||
    currentFilters?.startSum ||
    currentFilters?.endSum
  );

  return expenseList ? (
    <Container
      sx={{
        background: "var(--off-white-darker)",
        ...customScroll,
        color: "var(--purple-dark)",
      }}
      disableGutters
    >
      {areFiltersSelected && <Legend currentFilters={currentFilters}></Legend>}
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& .item": { marginRight: "1em" },
        }}
      >
        <p class="item">Expenses: {calcTotalItems().toLocaleString()}</p>
        <p class="item">Sum: {calcItemsSum().toLocaleString()}₪</p>
        <p class="item">Average: {calcAvgExpense().toLocaleString()}₪</p>
      </Typography>
      {!currentFilters?.Month && (
        <PieChart
          expenseList={expenseList}
          datasetLabels={[SPENT_ON_CATEGORY, NUM_OF_EXPENSES]}
          groupBy={GROUP_BY_MONTH}
        ></PieChart>
      )}
      {!currentFilters?.Category && (
        <PieChart
          expenseList={expenseList}
          datasetLabels={[SPENT_ON_CATEGORY, NUM_OF_EXPENSES]}
          groupBy={GROUP_BY_CATEGORY}
        ></PieChart>
      )}
      {!currentFilters?.Year && (
        <PieChart
          expenseList={expenseList}
          datasetLabels={[SPENT_ON_CATEGORY, NUM_OF_EXPENSES]}
          groupBy={GROUP_BY_YEAR}
        ></PieChart>
      )}
    </Container>
  ) : (
    <Container>No Data to show...</Container>
  );
}
