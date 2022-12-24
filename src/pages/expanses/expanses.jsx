import { StyledContainer, StyledBox } from "./expanses.styled";
import ExpenseDetailsComponent from "./components/expense-details/expense-detail";
import ExpenseListComponent from "./components/expenses-list/expenses-list";
import ExpenseToolbarComponent from "./components/expenses-toolbar/expenses-toolbar";

export default function ExpensesComponent() {
  return (
    <StyledContainer disableGutters={true}>
      <ExpenseToolbarComponent></ExpenseToolbarComponent>
      <StyledBox>
        <ExpenseListComponent></ExpenseListComponent>
        <ExpenseDetailsComponent></ExpenseDetailsComponent>
      </StyledBox>
    </StyledContainer>
  );
}
