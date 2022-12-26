import {
  ToolbarContainer,
  FilterBox,
  AddExpenseButton,
} from "./expenses-toolbar.styled";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
  Select,
  TextField,
  Box,
  Button,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { getFilterOptions } from "../../../../backendService/backend";
export default function ExpenseToolbarComponent({ handleApply }) {
  const [filterSelections, setFilterSelections] = useState({});

  // console.log(filterSelections);

  const dropdowns = {
    Year: getFilterOptions().years,
    Month: getFilterOptions().months,
    Category: getFilterOptions().categories,
  };

  const handleChange = (value, key) => {
    setFilterSelections({ ...filterSelections, [key]: value });
  };

  return (
    <ToolbarContainer>
      <FilterBox>
        <FilterListIcon />
        {Object.entries(dropdowns).map(([key, values]) => (
          <FormControl
            size="small"
            sx={{
              ml: "1em",
            }}
          >
            <InputLabel>{key}</InputLabel>
            <Select
              value={filterSelections[key] ?? ""}
              onChange={(e) => handleChange(e.target.value, key)}
              label={key}
              sx={{ minWidth: "8em" }}
            >
              {values.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
        <TextField
          size="small"
          sx={{ ml: "1em", width: "8em" }}
          type="number"
          onChange={(e) => handleChange(e.target.value, "startSum")}
          value={filterSelections.startSum ?? ""}
          placeholder="From"
        ></TextField>
        <TextField
          size="small"
          sx={{ ml: "1em", mr: "1em", width: "8em" }}
          type="number"
          onChange={(e) => handleChange(e.target.value, "endSum")}
          value={filterSelections.endSum ?? ""}
          placeholder="To"
        ></TextField>
        <Button>Clear</Button>
        <Button onClick={() => handleApply(filterSelections)}>Apply</Button>
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
