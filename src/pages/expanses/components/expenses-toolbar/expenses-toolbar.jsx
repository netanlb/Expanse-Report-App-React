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
  Button,
  IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { getFilterOptions } from "../../../../backendService/backend";
export default function ExpenseToolbarComponent({ handleApply }) {
  const [filterSelections, setFilterSelections] = useState({});

  console.log(filterSelections);

  const dropdowns = {
    Year: getFilterOptions().years,
    Month: getFilterOptions().months,
    Category: getFilterOptions().categories,
  };

  const handleChange = (value, key) => {
    setFilterSelections({ ...filterSelections, [key]: value });
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
  };

  const clear = () => {
    console.log("clear");
    setFilterSelections({});
  };

  return (
    <ToolbarContainer>
      <FilterBox>
        <FilterListIcon sx={{ mr: "1em" }} />
        {Object.entries(dropdowns).map(([key, values]) => (
          <FormControl
            variant="standard"
            size="small"
            sx={{
              width: "8em",
              mr: "1em",
              "& .MuiInputBase-root": {
                margin: 0,
              },
            }}
          >
            <InputLabel shrink={false} sx={{ top: "-16px" }}>
              {!filterSelections[key] && capitalizeFirstLetter(key)}
            </InputLabel>
            <Select
              value={filterSelections[key] ?? key}
              onChange={(e) => handleChange(e.target.value, key)}
            >
              <MenuItem key="none" value="">
                None
              </MenuItem>
              {values.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
        <TextField
          variant="standard"
          size="small"
          sx={{
            mr: "1em",
            width: "8em",
          }}
          type="number"
          onChange={(e) => handleChange(e.target.value, "startSum")}
          value={filterSelections.startSum ?? ""}
          placeholder="Start Sum"
        ></TextField>
        <TextField
          variant="standard"
          size="small"
          sx={{
            mr: "1em",
            width: "8em",
          }}
          type="number"
          onChange={(e) => handleChange(e.target.value, "endSum")}
          value={filterSelections.endSum ?? ""}
          placeholder="End Sum"
        ></TextField>
        <IconButton size="small" sx={{ mr: "0.5em" }} onClick={clear}>
          <ClearIcon sx={{ fontSize: "1.2em" }}></ClearIcon>
        </IconButton>
        <Button
          sx={{
            fontSize: "13px",
            color: "var(--purple-dark)",
            fontWeight: 600,
            borderRadius: 10,
          }}
          onClick={() => handleApply(filterSelections)}
        >
          Apply
        </Button>
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
