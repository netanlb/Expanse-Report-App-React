import { Container } from "@mui/material";
import {
  ExpenseHeader,
  backIcon,
  sumText,
  CatDateWrapper,
  MapWrapper,
  mapStyle,
  BottomButtons,
  Description
} from "./specific-details.styled";
import { customScroll } from "../../../expanses.styled";
import { icons } from "../../expenses-list/expenses-list";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
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
    <div style={{overflow:"hidden"}}>
      <ExpenseHeader>
        <iconButton
          style={backIcon}
          onClick={() => {
            setChosenExpense();
          }}
        >
          <CancelIcon />
        </iconButton>
        <span>Expense details</span>
      </ExpenseHeader>
      <Container
        sx={{
          background: "var(--off-white-darker)",
          textAlign: "center",
          ...customScroll,
          height: "100%",
        }}
      >
        <h1>{chosenExpense.name}</h1>
        <h2 style={sumText}>{chosenExpense.sum}₪</h2>
        <CatDateWrapper>
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
        {(chosenExpense.description)  &&
        <Description>{chosenExpense.description}</Description>
      }
        

        
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
    </div>
  );
}

/*
      
*/
