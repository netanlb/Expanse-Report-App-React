import { styled } from "@mui/material";
import { Box, Container } from "@mui/system";

export const StyledContainer = styled(Container)(() => ({
  display: "grid",
  gridTemplateRows: "1fr 10fr",
  background: "var(--off-white)",
  height: "calc(100vh - 64px)",
}));

export const StyledBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
}));
