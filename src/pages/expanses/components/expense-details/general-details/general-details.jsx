import { Container } from "@mui/material";
import { customScroll } from "../../expenses-toolbar/expenses-toolbar.styled";

export default function GeneralDetails() {
  return (
    <Container sx={{ background: "var(--off-white-darker)", ...customScroll }}>
      <h1>Some stats...</h1>
    </Container>
  );
}
