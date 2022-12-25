import { Container, Box, Typography } from "@mui/material";
import { ExpenseItem } from "./expenses-list.styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const expenseItems = [
  {
    name: "Rent",
    amount: 1000,
    date: "2021-09-01",
    category: "Home",
    description: "Rent for the month of September",
  },
  {
    name: "Groceries",
    amount: 100,
    date: "2021-09-01",
    category: "Food",
    description: "Groceries for the month of September",
  },
  {
    name: "Car Insurance",
    amount: 100,
    date: "2021-09-01",
    category: "Insurance",
    description: "Car Insurance for the month of September",
  },
  {
    name: "Car Insurance",
    amount: 100,
    date: "2021-09-01",
    category: "Insurance",
    description: "Car Insurance for the month of September",
  },
  {
    name: "Food for Cat",
    amount: 40,
    date: "2021-09-01",
    category: "Pet",
    description: "Food for Cat for the month of September",
  },
  {
    name: "Food for Dog",
    amount: 40,
    date: "2021-09-01",
    category: "Pet",
    description: "Food for Dog for the month of September",
  },
  {
    name: "Car Insurance",
    amount: 100,
    date: "2021-09-01",
    category: "Insurance",
    description: "Car Insurance for the month of September",
  },
  {
    name: "Car Insurance",
    amount: 100,
    date: "2021-09-01",
    category: "Insurance",
    description: "Car Insurance for the month of September",
  },
  {
    name: "Food for Cat",
    amount: 40,
    date: "2021-09-01",
    category: "Pet",
    description: "Food for Cat for the month of September",
  },
  {
    name: "Food for Dog",
    amount: 40,
    date: "2021-09-01",
    category: "Pet",
    description: "Food for Dog for the month of September",
  },
  {
    name: "Car Insurance",
    amount: 100,
    date: "2021-09-01",
    category: "Insurance",
    description: "Car Insurance for the month of September",
  },
  {
    name: "Food for Cat",
    amount: 40,
    date: "2021-09-01",
    category: "Pet",
    description: "Food for Cat for the month of September",
  },
  {
    name: "Food for Dog",
    amount: 40,
    date: "2021-09-01",
    category: "Pet",
    description: "Food for Dog for the month of September",
  },
  {
    name: "Food for Dog",
    amount: 40,
    date: "2021-09-01",
    category: "Pet",
    description: "Food for Dog for the month of September",
  },
  {
    name: "Car Insurance",
    amount: 100,
    date: "2021-09-01",
    category: "Insurance",
    description: "Car Insurance for the month of September",
  },
  {
    name: "Food for Cat",
    amount: 40,
    date: "2021-09-01",
    category: "Pet",
    description: "Food for Cat for the month of September",
  },
  {
    name: "Food for Dog",
    amount: 40,
    date: "2021-09-01",
    category: "Pet",
    description: "Food for Dog for the month of September",
  },
];

export default function ExpenseListComponent() {
  return (
    <Container>
      {expenseItems.map((item) => (
        <ExpenseItem>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ShoppingCartIcon
              sx={{ marginRight: ".2em", fontSize: "2.7em" }}
            ></ShoppingCartIcon>
            <div>
              <div style={{ fontSize: "1.2em", color: "var(--purple-light)" }}>
                {item.name}
              </div>
              <div style={{ fontSize: ".8em", color: "gray" }}>{item.date}</div>
            </div>
          </Box>
          <div style={{ fontSize: "1.6em" }}>{item.amount}$</div>
        </ExpenseItem>
      ))}
    </Container>
  );
}
