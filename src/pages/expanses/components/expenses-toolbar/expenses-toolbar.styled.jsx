import { Button, Select, styled, FormControl } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

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
  height: "70%",
  borderRadius: 20
}));

export const AddExpenseButton = styled(Button)(() => ({
  background: "var(--purple-light)",
  borderRadius: 20,
  "&:hover": {
    background: "var(--purple-hover)",
  },
}));

export const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});