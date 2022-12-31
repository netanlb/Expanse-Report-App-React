import { Container } from "@mui/material";
import { customScroll } from "../../../expanses.styled";

export default function SpecificExpenseDetails({
  chosenExpense,
  setChosenExpense,
  deleteExpense,
}) {
  function formatDate(date) {
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <Container sx={{ background: "var(--off-white-darker)", ...customScroll }}>
      <button
        onClick={() => {
          setChosenExpense();
        }}
      >
        Back
      </button>
      <h1>Expense Details</h1>
      <h1>{chosenExpense.name}</h1>
      <h2>{chosenExpense.category}</h2>
      <h3>{chosenExpense.description}</h3>
      <h4>{chosenExpense.sum}₪</h4>
      <h5>{formatDate(chosenExpense.date)}</h5>
      <img src="./map.jpg" alt="map" />
      <button
        onClick={() => {
          deleteExpense(chosenExpense.id);
        }}
      >
        Delete
      </button>
    </Container>
  );
}
