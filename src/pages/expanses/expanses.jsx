import { StyledContainer, StyledBox } from "./expanses.styled";
import ExpenseDetailsComponent from "./components/expense-details/expense-detail";
import ExpenseListComponent from "./components/expenses-list/expenses-list";
import ExpenseToolbarComponent from "./components/expenses-toolbar/expenses-toolbar";
import { useEffect, useState } from "react";

export default function ExpensesComponent() {
  const [currentFilters, setCurrentFilters] = useState({});
  const [expenseList, setExpenseList] = useState([]);

  console.log(currentFilters);

  // useEffect(() => {
  //   const expenses = getExpenses(currentFilters);
  //   setExpenseList(expenses);
  // }, currentFilters);

  return (
    <StyledContainer disableGutters>
      <ExpenseToolbarComponent
        applyFilters={setCurrentFilters}
      ></ExpenseToolbarComponent>
      <StyledBox>
        <ExpenseListComponent></ExpenseListComponent>
        <ExpenseDetailsComponent></ExpenseDetailsComponent>
      </StyledBox>
    </StyledContainer>
  );
}
