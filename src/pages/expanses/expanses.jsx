import { StyledContainer, StyledBox } from "./expanses.styled";
import ExpenseDetailsComponent from "./components/expense-details/expense-detail";
import ExpenseListComponent from "./components/expenses-list/expenses-list";
import ExpenseToolbarComponent from "./components/expenses-toolbar/expenses-toolbar";
import { useState, useEffect } from "react";
import { getExpenses, _deleteExpense } from "../../backendService/backend";
import { Typography, Container } from "@mui/material";

export default function ExpensesComponent() {
  const [currentFilters, setCurrentFilters] = useState();
  const [chosenExpense, setChosenExpense] = useState();
  const [expenseList, setExpenseList] = useState();
  useEffect(() => {
    currentFilters && setExpenseList(getExpenses(currentFilters));
  }, [currentFilters]);

  const deleteExpense = (id) => {
    setExpenseList(expenseList.filter((expense) => expense.id !== id));
    _deleteExpense(chosenExpense.id);
    setChosenExpense();
  };

  return (
    <StyledContainer disableGutters>
      <ExpenseToolbarComponent
        handleApply={setCurrentFilters}
      ></ExpenseToolbarComponent>
      {expenseList?.length ? (
        <StyledBox>
          <ExpenseListComponent
            chosenExpense={chosenExpense}
            expenseList={expenseList}
            setChosenExpense={setChosenExpense}
          ></ExpenseListComponent>
          <ExpenseDetailsComponent
            currentFilters={currentFilters}
            setChosenExpense={setChosenExpense}
            chosenExpense={chosenExpense}
            deleteExpense={deleteExpense}
            expenseList={expenseList}
          ></ExpenseDetailsComponent>
        </StyledBox>
      ) : (
        <Container sx={{ textAlign: "center" }} disableGutters>
          <Typography sx={{ background: "var(--purple-light-opacity-20)" }}>
            Oops... there seems to be no data matching your selections
          </Typography>
        </Container>
      )}
    </StyledContainer>
  );
}
