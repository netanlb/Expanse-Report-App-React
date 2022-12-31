import React from "react";
import SpecificExpenseDetails from "./specific-details/specific-details";
import GeneralDetails from "./general-details/general-details";
import { customScroll } from "../expenses-toolbar/expenses-toolbar.styled";

export default function ExpenseDetailsComponent({
  setChosenExpense,
  chosenExpense,
  deleteExpense,
}) {
  return chosenExpense ? (
    <SpecificExpenseDetails
      chosenExpense={chosenExpense}
      setChosenExpense={setChosenExpense}
      deleteExpense={deleteExpense}
    ></SpecificExpenseDetails>
  ) : (
    <GeneralDetails></GeneralDetails>
  );
}
