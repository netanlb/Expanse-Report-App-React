import {
  ToolbarContainer,
  FilterBox,
  AddExpenseButton,
} from "./expenses-toolbar.styled";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";

const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const categories = ["All", "Food", "Transport", "Clothes", "Entertainment", "Other"];
export default function ExpenseToolbarComponent() {
  return (
    <ToolbarContainer>
      <FilterBox>
        <FilterListIcon />
        <select>
          <option selected disabled>Years</option>
          {years.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </select>
        <select>
          <option selected disabled>Months</option>
          {months.map((month) => (
            <option value={month}>{month}</option>
          ))}
        </select>
        <select>
          <option selected disabled>Categories</option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <span>Range selector</span>
        <button>Clear</button>
        <button>Apply</button>
      </FilterBox>
      <AddExpenseButton variant="contained">
        <AddIcon></AddIcon>
        <Typography
          sx={{ fontSize: "0.8em", fontWeight: 700, paddingRight: 1 }}
        >
          Add Expense
        </Typography>
      </AddExpenseButton>
    </ToolbarContainer>
  );
}
