import { Container, Box, Typography } from "@mui/material";
import { ExpenseItem } from "./expenses-list.styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

const icons = {
  groceries: (
    <ShoppingCartIcon
      sx={{ color: "green", marginRight: ".5em", fontSize: "2.3em" }}
    ></ShoppingCartIcon>
  ),
  home: (
    <HomeRoundedIcon
      sx={{ color: "purple", marginRight: ".5em", fontSize: "2.3em" }}
    ></HomeRoundedIcon>
  ),

  furniture: (
    <ChairRoundedIcon
      sx={{ color: "brown", marginRight: ".5em", fontSize: "2.3em" }}
    ></ChairRoundedIcon>
  ),
  food: (
    <FastfoodRoundedIcon
      sx={{ color: "orange", marginRight: ".5em", fontSize: "2.3em" }}
    ></FastfoodRoundedIcon>
  ),
};

const expenseItems = [
  {
    name: "Rent",
    amount: 1000,
    date: "2021-09-01",
    category: "home",
    description: "Rent for the month of September",
  },
  {
    name: "groceries",
    amount: 100,
    date: "2021-09-01",
    category: "food",
    description: "Groceries for the month of September",
  },

  {
    name: "Bed",
    amount: 40,
    date: "2021-09-01",
    category: "furniture",
    description: "Bed for new apartment",
  },
  {
    name: "Hamurger",
    amount: 40,
    date: "2021-09-01",
    category: "food",
    description: "Hamburger at GDB in Tel Aviv",
  },
  {
    name: "Car Insurance",
    amount: 100,
    date: "2021-09-01",
    category: "home",
    description: "Car Insurance for the month of September",
  },
  {
    name: "Food for Cat",
    amount: 40,
    date: "2021-09-01",
    category: "home",
    description: "Food for Cat for the month of September",
  },
  {
    name: "Food for Dog",
    amount: 40,
    date: "2021-09-01",
    category: "home",
    description: "Food for Dog for the month of September",
  },
];

export default function ExpenseListComponent() {
  return (
    <Box>
      {expenseItems.map((item) => (
        <ExpenseItem>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icons[item.category]}
            <div>
              <div
                style={{
                  fontSize: "1.1em",
                  fontWeight: 600,
                  color: "var(--purple-light)",
                }}
              >
                {item.name}
              </div>
              <div style={{ fontSize: ".8em", color: "gray" }}>{item.date}</div>
            </div>
          </Box>
          <div style={{ fontSize: "1.5em" }}>{item.amount}$</div>
        </ExpenseItem>
      ))}
    </Box>
  );
}
