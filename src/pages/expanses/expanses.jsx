import { StyledContainer, StyledBox } from "./expanses.styled";
import ExpenseDetailsComponent from "./components/expense-details/expense-detail";
import ExpenseListComponent from "./components/expenses-list/expenses-list";
import ExpenseToolbarComponent from "./components/expenses-toolbar/expenses-toolbar";
import { useState, useEffect } from "react";
import { getExpenses, _deleteExpense } from "../../backendService/backend";

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
      <StyledBox>
        <ExpenseListComponent
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
    </StyledContainer>
  );
}
