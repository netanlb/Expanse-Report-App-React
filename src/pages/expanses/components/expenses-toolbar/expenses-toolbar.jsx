import {
  ToolbarContainer,
  FilterBox,
  AddExpenseButton,
  modalStyle,
  datePickerStyle,
  categoryDropDownStyle,
  descriptionStyle,
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
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import StorefrontIcon from '@mui/icons-material/Storefront';
import DescriptionIcon from '@mui/icons-material/Description';
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { icons } from '../expenses-list/expenses-list'
import { getFilterOptions, addExpense } from "../../../../backendService/backend";
export default function ExpenseToolbarComponent({ handleApply }) {
  const [filterSelections, setFilterSelections] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dateValue, setDateValue] = React.useState(dayjs(new Date()));
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newSum, setNewSum] = useState("");
  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNewCategoryChange = (event) => {
    setNewCategory(event.target.value);
  };
  const handleNewDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };
  const handleNewSumChange = (event) => {
    setNewSum(event.target.value);
  };
  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };
  const handleAddNewExpense = () => {
    let expenseObject = {
      name: newName,
      category: newCategory,
      description: newDescription,
      sum: newSum,
      date: dateValue,
    } 
    console.log(expenseObject);
    addExpense(expenseObject);
    handleApply({});
    handleClose();
  };
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

      <AddExpenseButton variant="contained" onClick={handleOpen}>
        <AddIcon></AddIcon>
        <Typography
          sx={{ fontSize: "0.8em", fontWeight: 700, paddingRight: 1 }}
        >
          Add Expense
        </Typography>
      </AddExpenseButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Expense
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <TextField
          label="Bussiness Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '50%' }}
          onChange={handleNewNameChange}
          InputProps={{
            startAdornment: <InputAdornment position="start"><StorefrontIcon/></InputAdornment>,
          }}
        />
            <FormControl sx={{ m: 1, width: "40%" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            type="number"
            startAdornment={<InputAdornment position="start">₪</InputAdornment>}
            label="Amount"
            onChange={handleNewSumChange}
          />
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label="Date"
          inputFormat="DD/MM/YYYY"
          value={dateValue}
          onChange={handleDateChange}
          renderInput={(params) => <TextField style={datePickerStyle} {...params} />}
        />
        </LocalizationProvider>
        <TextField
          id="outlined-select"
          select
          label="Category"
          style={categoryDropDownStyle}
          onChange={handleNewCategoryChange}
        >
          {getFilterOptions().categories.map((option) => (
            <MenuItem key={option} value={option}>
              {icons[option]}<span sx={{fontSize:"16px"}}>{option}</span>
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Decsription"
          style={descriptionStyle}
          id="outlined-start-adornment"
          onChange={handleNewDescriptionChange}
          sx={{ m: 1}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><DescriptionIcon/></InputAdornment>,
          }}
        />
        <Button sx={{ m: 1, width: "45%"}} onClick={handleClose} variant="outlined">Close</Button>
        <Button sx={{ m: 1, width: "45%"}} onClick={handleAddNewExpense} variant="contained">Add Expence</Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </ToolbarContainer>
  );
}
