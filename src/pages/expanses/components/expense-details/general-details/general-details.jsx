import { Container, Typography, Box } from "@mui/material";
import { customScroll } from "../../../expanses.styled";
import { PieChart } from "../../../../../components/charts/pieChart";
import Legend from "../../../../../components/legend/legend";
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
    const avg = calcItemsSum() / calcTotalItems();
    return avg ? avg.toFixed(0) : 0;
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
        background: "white",
        ...customScroll,
        color: "var(--purple-dark)",
        "& .chartRow": {
          display: "flex",
          justifyContent: "center",
        },
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
        <p className="item">Expenses: {calcTotalItems().toLocaleString()}</p>
        <p className="item">Sum: {calcItemsSum().toLocaleString()}₪</p>
        <p className="item">Average: {calcAvgExpense().toLocaleString()}₪</p>
      </Typography>
      {!currentFilters?.Month && (
        <div>
          <Typography sx={{ fontWeight: 600, textAlign: "center" }}>
            EXPENSES BY MONTH
          </Typography>
          <Box className="chartRow">
            <PieChart
              expenseList={expenseList}
              datasetLabels={[SPENT_ON_CATEGORY]}
              groupBy={GROUP_BY_MONTH}
              showLabels={false}
            ></PieChart>
            <PieChart
              expenseList={expenseList}
              datasetLabels={[NUM_OF_EXPENSES]}
              groupBy={GROUP_BY_MONTH}
              showLabels={false}
            ></PieChart>
          </Box>
        </div>
      )}
      {!currentFilters?.Category && (
        <div>
          <Typography sx={{ fontWeight: 600, textAlign: "center" }}>
            EXPENSES BY CATEGORY
          </Typography>
          <Box className="chartRow">
            <PieChart
              expenseList={expenseList}
              datasetLabels={[SPENT_ON_CATEGORY]}
              groupBy={GROUP_BY_CATEGORY}
              showLabels={false}
            ></PieChart>
            <PieChart
              expenseList={expenseList}
              datasetLabels={[NUM_OF_EXPENSES]}
              groupBy={GROUP_BY_CATEGORY}
              showLabels={false}
            ></PieChart>
          </Box>
        </div>
      )}
      {!currentFilters?.Year && (
        <div>
          <Typography sx={{ fontWeight: 600, textAlign: "center" }}>
            EXPENSES BY YEAR
          </Typography>
          <Box className="chartRow">
            <PieChart
              expenseList={expenseList}
              datasetLabels={[NUM_OF_EXPENSES]}
              groupBy={GROUP_BY_YEAR}
              showLabels={false}
            ></PieChart>
            <PieChart
              expenseList={expenseList}
              datasetLabels={[SPENT_ON_CATEGORY]}
              groupBy={GROUP_BY_YEAR}
              showLabels={false}
            ></PieChart>
          </Box>
        </div>
      )}
    </Container>
  ) : (
    <Container>No Data to show...</Container>
  );
}
