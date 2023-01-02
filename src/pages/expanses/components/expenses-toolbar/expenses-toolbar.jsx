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
  IconButton,
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect } from "react";

import {
  getFilterOptions,
  getLastSelectedFilters,
} from "../../../../backendService/backend";
import AddExpenseModalComponent from "../add-expense-modal/add-expense-modal";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ExpenseToolbarComponent({ handleApply }) {
  const defaultFilters = getLastSelectedFilters() ?? {
    Year: new Date().getFullYear(),
    Month: months[new Date().getMonth()],
  };

  const [filterSelections, setFilterSelections] = useState(defaultFilters);

  useEffect(() => {
    // apply happens when ever state for filterSelections changes
    handleApply(filterSelections);
  }, [filterSelections]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    setFilterSelections({});
  };

  return (
    <ToolbarContainer>
      <FilterBox>
        <FilterListIcon sx={{ mr: "1em" }} />
        {Object.entries(dropdowns).map(([key, values]) => (
          <FormControl
            key={key}
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
              value={filterSelections[key] ?? ""}
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
        <Tooltip title="clear" arrow>
          <IconButton size="small" sx={{}} onClick={clear}>
            <ClearIcon sx={{ fontSize: "1.2em" }}></ClearIcon>
          </IconButton>
        </Tooltip>
      </FilterBox>

      <AddExpenseButton variant="contained" onClick={handleOpen}>
        <AddIcon></AddIcon>
        <Typography
          sx={{ fontSize: "0.8em", fontWeight: 700, paddingRight: 1 }}
        >
          Add Expense
        </Typography>
      </AddExpenseButton>
      <AddExpenseModalComponent
        handleClose={handleClose}
        isOpen={open}
        handleApply={handleApply}
        setFilterSelections={setFilterSelections}
      ></AddExpenseModalComponent>
    </ToolbarContainer>
  );
}
