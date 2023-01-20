import { styled } from "@mui/material/styles";
import { theme } from "../../../theme/theme";
import { Box, Grid } from "@mui/material";
import Illustration from "../../atoms/Illustration";
import seeder from "../../../../public/logo/seeder.svg";
import home1 from "../../../../public/icons/home-1.svg";
import home2 from "../../../../public/icons/home-2.svg";
import coin1 from "../../../../public/icons/coin-normal.svg";
import coin2 from "../../../../public/icons/coin-highlighted.svg";
import { NavigationItem } from "../../molecules/navigationItem";
import flash from "../../../../public/icons/flash.svg";

const StyledGrid = styled(Grid)({
  height: "100vh",
  position: "sticky",
  top: 0,
  backgroundColor: `${theme.palette.elevation.color1}`,
});

const FixedGrid = styled(Grid)({
  height: "100vh",
  position: "sticky",
  top: 0,
  margin: 0,
  backgroundColor: `${theme.palette.elevation.color1}`,
  padding: "20px 20px 20px",
});

const Tab = styled("div")((props: { isSelected: boolean }) => ({
  padding: "1.1rem",
  borderRadius: "0.85rem",
  backgroundColor: props.isSelected
    ? `${theme.palette.elevation.color2}`
    : "transparent",
}));

export default function SideMenu() {
  return (
    <>
      {/* <StyledGrid container> */}
        <FixedGrid
          container
          direction={"column"}
          rowSpacing={10}
          justifyContent={"space-between"}
        >
          <Grid item>
            <Grid container direction={"column"} spacing={10}>
              <Grid item>
                <Box sx={{ cursor: "pointer" }} data-testid="logo">
                  <Illustration source={seeder} alt={"logo"} />
                </Box>
              </Grid>
              <Grid item>
                <Grid container direction={"column"} spacing={2}>
                  <Grid item>
                    <Tab isSelected={true} data-testid={"side-menu-tab-home"}>
                      <NavigationItem
                        variant={"functional"}
                        icon={home2}
                        iconSelected={home1}
                        selected={true}
                        color={`${theme.palette.text.disabled}`}
                        text={"Home"}
                      />
                    </Tab>
                  </Grid>
                  <Grid item>
                    <Tab
                      isSelected={false}
                      data-testid={"side-menu-tab-cash-acceleration"}
                    >
                      <NavigationItem
                        variant={"functional"}
                        icon={coin1}
                        iconSelected={coin2}
                        selected={false}
                        color={`${theme.palette.text.disabled}`}
                        text={"Cash Accleration"}
                      />
                    </Tab>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Tab isSelected={false}>
              <NavigationItem
                variant={"functional"}
                icon={flash}
                iconSelected={""}
                selected={false}
                color={`${theme.palette.text.disabled}`}
                text={"Watch how to"}
              />
            </Tab>
          </Grid>
        </FixedGrid>
      {/* </StyledGrid> */}
    </>
  );
}
