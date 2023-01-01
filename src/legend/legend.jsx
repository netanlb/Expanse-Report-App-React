import { Box, Typography } from "@mui/material";

export default function Legend({ currentFilters }) {
  return (
    currentFilters && (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "var(--purple-dark)",
          opacity: "0.5",
          color: "white",
        }}
      >
        <Typography>|&nbsp;&nbsp;&nbsp;</Typography>
        {currentFilters.Year && (
          <Typography sx={{ mr: "1em" }}>
            {currentFilters.Year}&nbsp;&nbsp;&nbsp;|
          </Typography>
        )}
        {currentFilters.Month && (
          <Typography sx={{ mr: "1em" }}>
            {currentFilters.Month}&nbsp;&nbsp;&nbsp;|
          </Typography>
        )}
        {currentFilters.Category && (
          <Typography sx={{ mr: "1em" }}>
            {currentFilters.Category}&nbsp;&nbsp;&nbsp;|
          </Typography>
        )}
        {currentFilters.startSum && (
          <Typography sx={{ mr: "1em" }}>
            From {currentFilters.startSum}₪&nbsp;&nbsp;&nbsp;|
          </Typography>
        )}
        {currentFilters.endSum && (
          <Typography sx={{ mr: "1em" }}>
            To {currentFilters.endSum}₪&nbsp;&nbsp;&nbsp;|
          </Typography>
        )}
      </Box>
    )
  );
}
