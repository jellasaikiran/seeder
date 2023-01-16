import { Grid } from "@mui/material";
import SideMenu from "../../organisms/Menu";

interface Props {
  cardsGrid: JSX.Element;
  headerBox: JSX.Element;
  cashKickCard: JSX.Element;
  tableBox: JSX.Element
}

export const HomePageTemplate = (props: Props) => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SideMenu />
        </Grid>
        <Grid item xs style={{"padding":"28px"}}>
          <Grid container direction={"column"} spacing={5}>
            <Grid item xs={12}>
              {props.headerBox}
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={7}>
                <Grid item xs={8}>{props.cardsGrid}</Grid>
                <Grid item xs={4}>{props.cashKickCard}</Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
                {props.tableBox}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
