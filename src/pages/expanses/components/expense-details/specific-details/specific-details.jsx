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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

const openSnakeBar = (type, message) => {
  document.dispatchEvent(
    new CustomEvent("openSnakeBar", {
      detail: { type: type, message: message },
    })
  );
};
export default function SpecificExpenseDetails({
  chosenExpense,
  setChosenExpense,
  deleteExpense,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
                handleClickOpen();
              }}
            >
              Delete Expense
            </Button>
          </BottomButtons>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Are you sure you want to delete this expense?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                As soon as you click "Delete" the expense named "
                {chosenExpense.name}" will be deleted and you will not be able
                to restore it!
                <br />
                If you are not sure please click "Cancel".
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="outlined">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  handleClose();
                  deleteExpense(chosenExpense.id);
                  openSnakeBar("success", "Expense deleted successfully!");
                }}
                autoFocus
                variant="contained"
                color="error"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Container>
    </div>
  );
}
