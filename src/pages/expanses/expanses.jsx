import { StyledContainer, StyledBox } from "./expanses.styled";
import ExpenseDetailsComponent from "./components/expense-details/expense-detail";
import ExpenseListComponent from "./components/expenses-list/expenses-list";
import ExpenseToolbarComponent from "./components/expenses-toolbar/expenses-toolbar";
import { useState } from "react";

export default function ExpensesComponent() {
  const [currentFilters, setCurrentFilters] = useState({});
  const [choosenExpense, setChoosenExpense] = useState({});
  const handleApply = (selections) => {
    setCurrentFilters(selections);
  };
  const getChoosenExpenseFromChild = (expens) => {
    setChoosenExpense(expens);
  };

  // useEffect(() => {
  //   const expenses = getExpenses(currentFilters);
  //   setExpenseList(expenses);
  // }, currentFilters);

  return (
    <StyledContainer disableGutters>
      <ExpenseToolbarComponent
        handleApply={handleApply}
      ></ExpenseToolbarComponent>
      <StyledBox>
        <ExpenseListComponent  currentFilters={currentFilters} getChoosenExpenseFromChild={getChoosenExpenseFromChild}></ExpenseListComponent>
        <ExpenseDetailsComponent handleApply={handleApply} getChoosenExpenseFromChild={getChoosenExpenseFromChild} currentFilters={currentFilters} choosenExpense={choosenExpense}></ExpenseDetailsComponent>
      </StyledBox>
    </StyledContainer>
  );
}
