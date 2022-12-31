import { styled, Container } from "@mui/material";

export const ExpenseItem = styled(Container)(() => ({
  paddingTop: ".5em",
  paddingBottom: ".5em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "&:hover": {
    background: "var(--off-white-darker)",
    cursor: "pointer",
  },
}));

export const overflowScroll = {
  overflowY: "auto",
  maxHeight: "calc(100vh - 149.23px)",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "var(--purple-light)",
  },
};
