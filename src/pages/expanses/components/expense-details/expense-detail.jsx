import { Container } from "@mui/material";

function formatDate(date) {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}


export default function ExpenseDetailsComponent({choosenExpense}) {
  console.log(choosenExpense)
  return (
    <Container sx={{ background: "var(--off-white-darker)" }}>
      <h1>{choosenExpense.name}</h1>
      <h2>{choosenExpense.category}</h2>
      <h3>{choosenExpense.description}</h3>
      <h4>{choosenExpense.sum}₪</h4>
      <h5>{choosenExpense.date}</h5>

    </Container>
  );
}
