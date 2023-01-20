import { Grid, styled } from "@mui/material";
import { theme } from "../../../theme/theme";
import Chip from "../../atoms/Chip";
import { NavigationItem } from "../../molecules/navigationItem";
import LeftArrow from '../../../../public/icons/left-arrow.svg'

import SideMenu from "../../organisms/Menu";

interface Props {
  headerBox: JSX.Element;
  summaryBox: JSX.Element;
  tableBox: JSX.Element
}

const BackButton = styled("div")({
  height: "1.163rem",
  width: "fit-content",
  backgroundColor: `${theme.palette.elevation.color1}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0.85rem",
  border: `0.163rem solid ${theme.palette.grey[300]}`,
  padding: "0.475rem 0.85rem",
  cursor: "pointer",
});

export const NewCashKickTemplate = (props: Props) => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SideMenu />
        </Grid>
        <Grid item xs style={{ padding: "28px" }}>
          <Grid container direction={"column"} rowSpacing={5}>
            <Grid item xs={12}>
              {props.headerBox}
            </Grid>
            <Grid item xs={12}>
              <BackButton>
                <NavigationItem
                  variant={"functional"}
                  icon={""}
                  iconSelected={LeftArrow}
                  selected={true}
                  text={"Back"}
                />
              </BackButton>
            </Grid>
            <Grid item xs={12}>
              <Grid container columnSpacing={5}>
                <Grid item xs={8}>{props.tableBox}</Grid>
                <Grid item xs={4}>{props.summaryBox}</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
