import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Slider from '@mui/material/Slider';
// import { Icon } from "@mui/material";
import {
  ToolbarContainer,
  FilterBox,
  AddExpenseButton,
  CustomWidthTooltip ,
  Item
} from "./expenses-toolbar.styled";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, Typography } from "@mui/material";
function valuetext(value) {
  return `${value}°C`;
}
export default function ExpenseToolbarComponent() {
  const [value, setValue] = React.useState([20, 37]);
  const [year, setYear] = React.useState('');
  const years = [2023, 2022, 2021, 2020, 2019, 2018]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const categories = ["All", "Food", "Transport", "Clothes", "Health", "Entertainment", "Other"]
  const handleChange = (event) => {
    setYear(event.target.value); 

  };
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ToolbarContainer>
      <FilterBox>
        <FilterListIcon />

      <FormControl size='small' sx={{marginLeft: "20px"}}>
        <InputLabel variant="standard" sx={{fontSize:"12px"}}>
          Year
        </InputLabel>
        <NativeSelect sx={{fontSize:"14px", width:"70px"}}
        onChange={handleChange}
          //defaultValue={2022}
        >
          {years.map((year) => (<option value={year} key={year}>{year}</option>))}
        </NativeSelect>
      </FormControl>
      <FormControl sx={{marginLeft: "20px"}}>
      <InputLabel variant="standard">
          Month
        </InputLabel>
        <NativeSelect
          //defaultValue={"January"}
        >
          {months.map((month) => (<option value={month} key={month}>{month}</option>))}
        </NativeSelect>
      </FormControl>
      <FormControl sx={{marginLeft: "20px"}}>
      <InputLabel variant="standard">
          Category
        </InputLabel>
        <NativeSelect
          //defaultValue={"All"}
        >
          {categories.map((category) => (<option value={category} key={category}>{category}</option>))}
        </NativeSelect>
      </FormControl>

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