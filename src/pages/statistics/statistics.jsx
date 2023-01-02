import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function StatisticsComponent() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 64px)",
      }}
    >
      <img
        src="./construction.ico"
        style={{ height: 100 }}
        alt="construction img"
      ></img>
      <Typography
        variant="h4"
        xs={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        Sorry, this page is still under construction
      </Typography>
    </Container>
  );
}
