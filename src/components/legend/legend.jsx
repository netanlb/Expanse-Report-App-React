import { Box, Typography } from "@mui/material";

export default function Legend({ currentFilters }) {
  return (
    currentFilters && (
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "var(--purple-dark)",
          opacity: "0.5",
          color: "white",
          position: "sticky",
          top: 0,
          fontSize: "1em",

          "& .item": {
            padding: 0,
            margin: 0,
            marginRight: "1em",
          },
        }}
      >
        <p className="item">|&nbsp;&nbsp;&nbsp;</p>
        {currentFilters.Year && (
          <p className="item">{currentFilters.Year}&nbsp;&nbsp;&nbsp;|</p>
        )}
        {currentFilters.Month && (
          <p className="item">{currentFilters.Month}&nbsp;&nbsp;&nbsp;|</p>
        )}
        {currentFilters.Category && (
          <p className="item">{currentFilters.Category}&nbsp;&nbsp;&nbsp;|</p>
        )}
        {currentFilters.startSum && (
          <p className="item">
            From {currentFilters.startSum}₪&nbsp;&nbsp;&nbsp;|
          </p>
        )}
        {currentFilters.endSum && (
          <p className="item">To {currentFilters.endSum}₪&nbsp;&nbsp;&nbsp;|</p>
        )}
      </Typography>
    )
  );
}
