import { Box } from "@mui/material";
import { ExpenseItem } from "./expenses-list.styled";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import ImageIcon from "@mui/icons-material/Image";
import { customScroll } from "../expenses-toolbar/expenses-toolbar.styled";

export const icons = {
  Bills: (
    <ReceiptIcon
      sx={{ color: "#1221EE", marginRight: ".5em", fontSize: "2.3em" }}
    ></ReceiptIcon>
  ),
  Home: (
    <HomeRoundedIcon
      sx={{ color: "#7112EE", marginRight: ".5em", fontSize: "2.3em" }}
    ></HomeRoundedIcon>
  ),
  Entertainment: (
    <TheaterComedyIcon
      sx={{ color: "#DF12EE", marginRight: ".5em", fontSize: "2.3em" }}
    ></TheaterComedyIcon>
  ),
  Groceries: (
    <LocalGroceryStoreIcon
      sx={{ color: "#EE128F", marginRight: ".5em", fontSize: "2.3em" }}
    ></LocalGroceryStoreIcon>
  ),
  Restaurants: (
    <RestaurantRoundedIcon
      sx={{ color: "#CE1900", marginRight: ".5em", fontSize: "2.3em" }}
    ></RestaurantRoundedIcon>
  ),
  Food: (
    <FastfoodRoundedIcon
      sx={{ color: "#CE1900", marginRight: ".5em", fontSize: "2.3em" }}
    ></FastfoodRoundedIcon>
  ),
  Insurence: (
    <SafetyCheckIcon
      sx={{ color: "#CE8000", marginRight: ".5em", fontSize: "2.3em" }}
    ></SafetyCheckIcon>
  ),
  Communication: (
    <SatelliteAltIcon
      sx={{ color: "#B5CE00", marginRight: ".5em", fontSize: "2.3em" }}
    ></SatelliteAltIcon>
  ),
  Transportation: (
    <DirectionsBusIcon
      sx={{ color: "#009CCE", marginRight: ".5em", fontSize: "2.3em" }}
    ></DirectionsBusIcon>
  ),
  Energy: (
    <GasMeterIcon
      sx={{ color: "#EE128F", marginRight: ".5em", fontSize: "2.3em" }}
    ></GasMeterIcon>
  ),
  Other: (
    <ImageIcon
      sx={{ color: "#EE128F", marginRight: ".5em", fontSize: "2.3em" }}
    ></ImageIcon>
  ),
};

function formatDate(date) {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function ExpenseListComponent({
  setChosenExpense,
  expenseList,
}) {
  return (
    <Box sx={customScroll}>
      {expenseList &&
        expenseList.map((item) => (
          <ExpenseItem onClick={() => setChosenExpense(item)} key={item.id}>
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
                <div style={{ fontSize: ".8em", color: "gray" }}>
                  {formatDate(item.date)}
                </div>
              </div>
            </Box>
            <div
              style={{
                fontSize: "1.4em",
                color: "var(--purple-dark)",
                fontWeight: 500,
              }}
            >
              {item.sum}₪
            </div>
          </ExpenseItem>
        ))}
    </Box>
  );
}
