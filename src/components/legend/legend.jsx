import { Typography } from "@mui/material";

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
        <span className="item">|&nbsp;&nbsp;&nbsp;</span>
        {currentFilters.Year && (
          <span className="item">{currentFilters.Year}&nbsp;&nbsp;&nbsp;|</span>
        )}
        {currentFilters.Month && (
          <span className="item">
            {currentFilters.Month}&nbsp;&nbsp;&nbsp;|
          </span>
        )}
        {currentFilters.Category && (
          <span className="item">
            {currentFilters.Category}&nbsp;&nbsp;&nbsp;|
          </span>
        )}
        {currentFilters.startSum && (
          <span className="item">
            From {currentFilters.startSum}₪&nbsp;&nbsp;&nbsp;|
          </span>
        )}
        {currentFilters.endSum && (
          <span className="item">
            To {currentFilters.endSum}₪&nbsp;&nbsp;&nbsp;|
          </span>
        )}
      </Typography>
    )
  );
}
