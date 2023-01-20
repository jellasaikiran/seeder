import { Grid, Stack, styled } from "@mui/material";
import { Banner } from "../../molecules/Banner";
import { theme } from "../../../theme/theme";
import ChipSet from "../../atoms/Chip";
import CashAccelerationCard from "../../molecules/CashAccelerationCard";
import receipt from "../../../../public/icons/receipt-text.svg";
import info from "../../../../public/icons/info-circle-small.svg";
import { formatAmount } from "../../../utils/functions";
import { ProgressBar } from "../../molecules/ProgressBar";
import TypographyComponent from "../../atoms/Typography";
import { NavigationItem } from "../../molecules/navigationItem";

interface Props {
  daysCount: number;
  dueDate: any;
  dueAmount: number;
  progressValue: number;
  outstanding: number;
}

const StyledGridItem = styled(Grid)({
  backgroundColor: theme.palette.elevation.color1,
  borderRadius: "0.85rem",
});

export const HomeCardGrid = (props: Props) => {
  return (
    <>
      <div>
        <Grid container direction={"row"} columnSpacing={7}>
          <Grid item xs={6}>
            <StyledGridItem container direction={"column"} pt={5} pb={10} px={8}>
              <Grid item container justifyContent={"flex-end"}>
                <ChipSet
                  variant={"payment"}
                  content={`Due in ${props.daysCount} days(s)`}
                />
              </Grid>
              <Grid item container>
                <CashAccelerationCard
                  icon={receipt}
                  title={`Due - ${props.dueDate}`}
                  content={`$${formatAmount(props.dueAmount)}`}
                />
              </Grid>
            </StyledGridItem>
          </Grid>
          <Grid item xs={6}>
            <StyledGridItem container direction={"column"} pt={5} pb={10} px={8}>
              <Grid item container direction={"column"} rowSpacing={7} mt={1.5}>
                <Grid item>
                  <ProgressBar value={props.progressValue} />
                </Grid>
                <Grid item>
                  <Grid container direction={"column"} rowSpacing={2.5}>
                    <Grid item>
                      <NavigationItem
                        variant={"normal"}
                        icon={info}
                        iconSelected={""}
                        selected={false}
                        text={"Outstanding amount"}
                        textVariant="body1"
                        color={`${theme.palette.text.secondary}`}
                      />
                    </Grid>
                    <Grid item>
                      <TypographyComponent
                        variant="h2"
                        color={`${theme.palette.text.primary}`}
                      >
                        {`$${formatAmount(props.outstanding)}`}
                      </TypographyComponent>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </StyledGridItem>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
