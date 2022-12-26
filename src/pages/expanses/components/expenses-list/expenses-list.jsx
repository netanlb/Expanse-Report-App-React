import { Container, Box, Typography } from "@mui/material";
import { ExpenseItem } from "./expenses-list.styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import {getExpanses, addExpense, deleteExpense, getFilterOptions} from "../../../../backendService/backend";


const icons = {
  Energy: (
    <ShoppingCartIcon
      sx={{ color: "green", marginRight: ".5em", fontSize: "2.3em" }}
    ></ShoppingCartIcon>
  ),
  Home: (
    <HomeRoundedIcon
      sx={{ color: "purple", marginRight: ".5em", fontSize: "2.3em" }}
    ></HomeRoundedIcon>
  ),

  Entertainment: (
    <ChairRoundedIcon
      sx={{ color: "brown", marginRight: ".5em", fontSize: "2.3em" }}
    ></ChairRoundedIcon>
  ),
  Food: (
    <FastfoodRoundedIcon
      sx={{ color: "orange", marginRight: ".5em", fontSize: "2.3em" }}
    ></FastfoodRoundedIcon>
  ),
};


export default function ExpenseListComponent({currentFilters}) {
  return (
    <Box>
      {getExpanses(currentFilters).map((item) => (
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
          <div style={{ fontSize: "1.5em" }}>{item.sum}$</div>
        </ExpenseItem>
      ))}
    </Box>
  );
}
