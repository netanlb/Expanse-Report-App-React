// import { Icon } from "@mui/material";
import { ToolbarContainer, FilterBox } from "./expenses-toolbar.styled";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function ExpenseToolbarComponent() {
  return (
    <ToolbarContainer>
      <FilterBox>
        <FilterListIcon />
      </FilterBox>
    </ToolbarContainer>
  );
}
