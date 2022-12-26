import {
  ToolbarContainer,
  FilterBox,
  AddExpenseButton,
} from "./expenses-toolbar.styled";
import {
  InputLabel,
  MenuItem,
  NativeSelect,
  Slider,
  FormControl,
  Typography,
  Select,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function valuetext(value) {
  return `${value}°C`;
}

export default function ExpenseToolbarComponent() {
  const [filterSelections, setFilterSelections] = useState({
    year: "",
    month: "",
    category: "",
  });

  console.log(filterSelections);
  const filterOptions = {
    year: [2023, 2022, 2021, 2020, 2019, 2018],
    month: [
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
    ],
    category: [
      "All",
      "Food",
      "Transport",
      "Clothes",
      "Health",
      "Entertainment",
      "Other",
    ],
  };

  const handleChange = (value, key) => {
    setFilterSelections({ ...filterSelections, [key]: value });
  };

  const handleSliderChange = (event, newValue) => {};

  return (
    <ToolbarContainer>
      <FilterBox>
        <FilterListIcon />
        {Object.entries(filterOptions).map(([key, values]) => (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            key={key}
          >
            <InputLabel>{key}</InputLabel>
            <Select
              value={filterSelections[key]}
              onChange={(e) => handleChange(e.target.value, key)}
              label={key}
            >
              {values.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
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
/*

      <Slider
  getAriaLabel={() => 'Temperature range'}
  value={value}
  onChange={handleSliderChange}
  valueLabelDisplay="yes"
  getAriaValueText={valuetext}
  //marks={[{value: 0, label: '0'}, {value: 100, label: '100'}]}
/>
*/
