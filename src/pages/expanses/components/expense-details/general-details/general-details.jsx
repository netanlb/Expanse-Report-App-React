import { Container, Box } from "@mui/material";
import { customScroll } from "../../../expanses.styled";
import { PieChart } from "../../../../../charts/pieChart";

export default function GeneralDetails({ expenseList }) {
  const calcTotalItems = () => {
    return expenseList.length;
  };

  const calcItemsSum = () => {
    return expenseList.reduce((sum, curr) => {
      return sum + curr.sum;
    }, 0);
  };

  const calcAvgExpense = () => {
    return calcItemsSum() / calcTotalItems();
  };

  return expenseList ? (
    <Container
      sx={{
        background: "var(--off-white-darker)",
        ...customScroll,
        color: "var(--purple-dark)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& .item": { marginRight: "1em" },
        }}
      >
        <p class="item">Total #: {calcTotalItems()}</p>
        <p class="item">Sum: {calcItemsSum()}</p>
        <p class="item">Average: {calcAvgExpense().toFixed(2)}</p>
      </Box>

      <PieChart expenseList={expenseList}></PieChart>
    </Container>
  ) : (
    <Container>No Data to show...</Container>
  );
}
