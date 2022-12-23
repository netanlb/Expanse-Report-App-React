import { Button, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Box, Container } from "@mui/system";

const pages = ["EXPANSES", "STATISTICS"];

export default function NavBarComponent() {
  return (
    <AppBar
      position="sticky"
      className="navbar"
      sx={{
        backgroundColor: "#2D0060",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
