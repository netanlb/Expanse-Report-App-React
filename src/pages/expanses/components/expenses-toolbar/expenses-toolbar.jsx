// import { Icon } from "@mui/material";
import {
  ToolbarContainer,
  FilterBox,
  AddExpenseButton,
} from "./expenses-toolbar.styled";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";

export default function ExpenseToolbarComponent() {
  return (
    <ToolbarContainer>
      <FilterBox>
        <FilterListIcon />
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
