import { theme } from "../../../theme/theme";
import info from "../../../../public/icons/info-circle.svg";
import { NavigationItem } from "../../molecules/navigationItem";
import { Grid, styled } from "@mui/material";

interface Props {
  variant: "normal";
  text: string;
  table: JSX.Element;
}

const TableContainer = styled(Grid)({
  backgroundColor: theme.palette.elevation.color1,
  padding: "2.1rem",
  border: `0.163rem solid ${theme.palette.grey[300]}`,
  borderRadius: "0.85rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.35rem",
});

const width100 = {
    "width" : "100%"
}

export const TableBox = (props: Props) => {
  return (
    <>
      <TableContainer container>
        <Grid item xs={12}>
          <NavigationItem
            variant={"normal"}
            icon={info}
            text={props.text}
            color={theme.palette.text.primary}
            textVariant="h2"
            iconSelected={""}
            selected={false}
          />
        </Grid>
        <Grid item xs={12} style={width100}>{props.table}</Grid>
      </TableContainer>
    </>
  );
};
