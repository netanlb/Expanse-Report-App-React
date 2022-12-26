import { Button, styled } from "@mui/material";
import { Container, Box } from "@mui/system";

export const ToolbarContainer = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid var(--purple-light)",
}));

export const FilterBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: "white",
  borderRadius: 30,
}));

export const AddExpenseButton = styled(Button)(() => ({
  background: "var(--purple-light)",
  borderRadius: 20,
  "&:hover": {
    background: "var(--purple-hover)",
  },
}));

export const RangeContainer = styled(Container)(() => ({
  position: "relative",
  width: "50px",
  marginLeft: 0,
}));

export const RangeTooltip = styled(Box)(() => ({
  position: "absolute",
  top: "25px",
  width: "260px",
  height: "50px",
  backgroundColor: "white",
  border: "1px solid black",
  borderRadius: "10px",
}));

export const RangeInput = styled("input")(() => ({
  width: "100px",
  height: "20px",
  margin: "10px",
}));

export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};