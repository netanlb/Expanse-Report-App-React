import { Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import {
  StyledAppBar,
  LogoTypography,
  StyledTab,
  StyledTabs,
} from "./navbar.styled";

export default function NavBarComponent({ tabs }) {
  const locationName = useLocation().pathname.substring(1);

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <LogoTypography>
            <img
              src="./chart-646.svg"
              style={{ color: "white", height: 20 }}
              alt="logo"
            ></img>
            &nbsp;EXPENSES
          </LogoTypography>

          <StyledTabs
            TabIndicatorProps={{
              style: { background: "white" },
            }}
            value={locationName}
          >
            {tabs.map((tab) => (
              <StyledTab
                value={tab}
                label={tab}
                key={tab}
                href={"/" + tab}
              ></StyledTab>
            ))}
          </StyledTabs>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
