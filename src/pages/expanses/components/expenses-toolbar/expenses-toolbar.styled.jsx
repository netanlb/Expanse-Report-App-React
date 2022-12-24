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
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: "white",
  width: "calc(50% - (24px * 2))",
  height: "50%",
  borderRadius: 20,
}));

export const AddExpenseButton = styled(Button)(() => ({
  background: "var(--purple-light)",
  borderRadius: 20,
  "&:hover": {
    background: "var(--purple-hover)",
  },
}));
