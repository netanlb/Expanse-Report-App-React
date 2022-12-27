import React from "react";
import { Container } from "@mui/material";
import { deleteExpense } from "../../../../backendService/backend";

function formatDate(date) {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}
const event = new Event('updateList');

export default function ExpenseDetailsComponent({ getChoosenExpenseFromChild ,currentFilters, choosenExpense, handleApply }) {
  if (JSON.stringify(choosenExpense) !== "{}") {
    return (
      <Container sx={{ background: "var(--off-white-darker)" }}>
        <h1>Expense Details</h1>
        <h1>{choosenExpense.name}</h1>
        <h2>{choosenExpense.category}</h2>
        <h3>{choosenExpense.description}</h3>
        <h4>{choosenExpense.sum}₪</h4>
        <h5>{formatDate(choosenExpense.date)}</h5>
        <img src="./map.jpg" alt="map" />
        <button onClick={() => {deleteExpense(choosenExpense.id); handleApply(currentFilters); getChoosenExpenseFromChild({}); dispatchEvent(event);}}>Delete</button>
      </Container>
    );
  }
  else{
    return (
      <Container sx={{ background: "var(--off-white-darker)" }}>
        <h1>Some stats...</h1>
      </Container>
    );
  }
}
