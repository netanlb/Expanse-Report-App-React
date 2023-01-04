import { Container, IconButton } from "@mui/material";
import {
  ExpenseHeader,
  sumText,
  CatDateWrapper,
  MapWrapper,
  mapStyle,
  BottomButtons,
  Description,
} from "./specific-details.styled";
import { customScroll } from "../../../expanses.styled";
import { icons } from "../../expenses-list/expenses-list";
import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import EventIcon from "@mui/icons-material/Event";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <div style={{ overflow: "hidden" }}>
      <Container
        disableGutters
        sx={{
          background: "white",
          textAlign: "center",
          ...customScroll,
          paddingBottom: "1em",
        }}
      >
        <ExpenseHeader disableGutters>
          <IconButton
            onClick={() => {
              setChosenExpense();
            }}
          >
            <CancelIcon sx={{ color: "white" }} />
          </IconButton>
          <span>Expense Details</span>
        </ExpenseHeader>
        <Container>
          <h1>{chosenExpense.name}</h1>
          <h2 style={sumText}>{chosenExpense.sum}₪</h2>
          <CatDateWrapper disableGutters>
            <div>
              {icons[chosenExpense.category]}
              {chosenExpense.category}
            </div>

            <div>
              <EventIcon
                sx={{
                  color: "var(--purple-light)",
                  fontSize: "2.3em",
                  marginRight: ".5em",
                }}
              />
              {formatDate(chosenExpense.date)}
            </div>
          </CatDateWrapper>
          {chosenExpense.description && (
            <Description>{chosenExpense.description}</Description>
          )}

          <MapWrapper>
            <img src="./map.jpg" alt="map" style={mapStyle} />
          </MapWrapper>
          <BottomButtons>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              sx={{ marginTop: "20px" }}
              onClick={() => {
                deleteExpense(chosenExpense.id);
              }}
            >
              Delete Expense
            </Button>
          </BottomButtons>
        </Container>
      </Container>
    </div>
  );
}
