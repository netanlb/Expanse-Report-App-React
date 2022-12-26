import React, { useState, useRef, useEffect } from "react";
import {
  ToolbarContainer,
  FilterBox,
  AddExpenseButton,
  RangeContainer,
  RangeTooltip,
  RangeInput,
} from "./expenses-toolbar.styled";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
export default function ExpenseToolbarComponent() {
  const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016];
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
  const categories = [
    "All",
    "Food",
    "Transport",
    "Clothes",
    "Entertainment",
    "Other",
  ];
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [category, setCategory] = useState(0);
  const [startSum, setStartSum] = useState(0);
  const [endSum, setEndSum] = useState(10000);
  const [rangeTooltip, setRangeTooltip] = useState(false);
  const yearChange = (event) => {
    setYear(event.target.value);
  };
  const monthChange = (event) => {
    setMonth(event.target.value);
  };
  const categoryChange = (event) => {
    setCategory(event.target.value);
  };
  const startSumChange = (event) => {
    setStartSum(event.target.value);
  };
  const endSumChange = (event) => {
    setEndSum(event.target.value);
  };
  const clearValues = () => {
    // 👇️ clear input value
    setYear("0");
    setMonth("0");
    setCategory("0");
    setStartSum(0);
    setEndSum(10000);
  };
  const rangeChange = (event) => {
    setRangeTooltip(!rangeTooltip);
  };
  const RangeTooltipRef = useRef(null);
  const CloseTooltip = (e) => {
    if (
      RangeTooltipRef.current &&
      rangeTooltip &&
      !RangeTooltipRef.current.contains(e.target)
    ) {
      setRangeTooltip(false);
    }
  };
  const applyFilter = () => {
    let filterObject = {
      year: year,
      month: month,
      category: category,
      startSum: startSum,
      endSum: endSum,
    };
    console.log(filterObject);
  };
  document.addEventListener("mousedown", CloseTooltip);
  return (
    <ToolbarContainer>
      <FilterBox>
        <FilterListIcon />
        <select onChange={yearChange} value={year}>
          <option disabled key="0" value={0}>
            Years
          </option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
        <select onChange={monthChange} value={month}>
          <option disabled key="months" value={0}>
            Months
          </option>
          {months.map((month) => (
            <option value={month} key={month}>
              {month}
            </option>
          ))}
        </select>
        <select onChange={categoryChange} value={category}>
          <option disabled key="categories" value={0}>
            Categories
          </option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <RangeContainer ref={RangeTooltipRef} disableGutters>
          <button onClick={rangeChange}>
            Range
          </button>
          <RangeTooltip
            ref={RangeTooltipRef}
            display={rangeTooltip ? "flex" : "none"}
          >
            <RangeInput
              type="number"
              onChange={startSumChange}
              value={startSum}
              placeholder="Start Sum"
            />
            <RangeInput
              type="number"
              onChange={endSumChange}
              value={endSum}
              placeholder="End Sum"
            />
          </RangeTooltip>
        </RangeContainer>

        <button onClick={clearValues}>Clear</button>
        <button onClick={applyFilter}>Apply</button>
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
