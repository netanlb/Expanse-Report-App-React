import { styled } from "@mui/material";
import { Container, Box } from "@mui/system";

export const ToolbarContainer = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
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
