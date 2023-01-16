import styled from "@emotion/styled";
import { Box, Divider, Grid, Stack } from "@mui/material";
import { theme } from "../../../theme/theme";
import { NavigationItem } from "../../molecules/navigationItem";
import info from "../../../../public/icons/info-circle.svg";
import TypographyComponent from "../../atoms/Typography";
import ButtonComponent from "../../atoms/Button";
import SummarySlider from "../../atoms/Slider";
import { INTEREST, SELECTED } from "../../../utils/constants";
import { formatAmount } from "../../../utils/functions";

interface Props {
  variant: "summary-slider" | "summary-review";
  term: number;
  selectedcontracts: number;
  handleReset: () => void;
  value: number;
  sum: number;
  handleSliderChange?: (event: any, value: any) => void;
  payout: number;
  paybackamount: number;
  rate: number;
  handleReview: () => void;
}

const StyledGrid = styled(Grid)({
  backgroundColor: theme.palette.elevation.color1,
  border: `0.163rem solid ${theme.palette.grey[300]}`,
  borderRadius: 12,
  padding: "12px 32px 32px",
  margin: 0,
});

const StyledDivider = styled(Divider)({
  backgroundColor: theme.palette.grey[600],
});

const ResetButton = styled(ButtonComponent)({
  height: 31,
  width: 65,
  color: theme.palette.text.secondary,
  textTransform: "none",
  borderRadius: 12,
  backgroundColor: theme.palette.elevation.color2,
  "&.Mui-disabled": {
    color: theme.palette.text.disabled,
  },
});

const ReviewButton = styled(ButtonComponent)({
  height: 60,
  width: "100%",
  borderRadius: 12,
  color: theme.palette.grey[500],
  textTransform: "none",
  "&.Mui-disabled": {
    color: theme.palette.text.disabled,
    background: theme.palette.primary[600],
  },
});

export const SummaryCard = (props: Props) => {
  return (
    <Box>
      <StyledGrid container direction={"column"} rowSpacing={5}>
        <Grid item>
          <NavigationItem
            variant={"normal"}
            icon={info}
            text={"Summary"}
            color={theme.palette.text.primary}
            textVariant="h2"
            iconSelected={""}
            selected={false}
          />
        </Grid>
        <Grid item>
          <Grid container direction={"column"} spacing={1}>
            <Grid item container justifyContent={"space-between"}>
              <Grid item>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.disabled}
                  children={"Term"}
                />
              </Grid>
              <Grid item>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.primary}
                  children={`${props.term} months`}
                />
              </Grid>
            </Grid>
            <Grid item container justifyContent={"space-between"}>
              <Grid item>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.disabled}
                  children={"Selected contracts"}
                />
              </Grid>
              <Grid item>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.primary}
                  children={`${props.selectedcontracts}`}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {props.variant === "summary-slider" && (
          <>
            <Grid item>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <TypographyComponent
                    variant="body1"
                    color={theme.palette.text.disabled}
                    children={"Slide to autoselect"}
                  />
                </Grid>
                <Grid item>
                  <ResetButton
                    label={"Reset"}
                    variant={"text"}
                    textVariant="subtitle1"
                    onClick={props.handleReset}
                    disabled={props.value > 0 ? false : true}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <SummarySlider
                max={props.sum}
                value={props.value}
                handleChange={props.handleSliderChange}
              />
            </Grid>
            <Grid item>
              <Stack direction="row">
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.primary.main}
                  children={`$${formatAmount(props.value)}`}
                  data-testid="selected-amount"
                />
                &nbsp;
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.disabled}
                  children={SELECTED}
                />
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.disabled}
                  children={` ${formatAmount(props.sum)}`}
                />
              </Stack>
            </Grid>
          </>
        )}
        <Grid item>
          <Grid container direction={"column"} spacing={1}>
            <Grid item container justifyContent={"space-between"}>
              <Grid item>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.disabled}
                  children={"Pay back amount"}
                />
              </Grid>
              <Grid item>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.primary}
                  children={`$${formatAmount(props.paybackamount)}`}
                  data-testid="payback-amount"
                />
              </Grid>
            </Grid>
            <Grid item container justifyContent={"space-between"}>
              <Grid item>
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.disabled}
                  children={"Rate%"}
                />
              </Grid>
              <Grid item>
                <Stack direction="row" alignItems={"center"}>
                  <TypographyComponent
                    variant="caption"
                    color={theme.palette.text.disabled}
                    children={INTEREST}
                  />
                  &nbsp;
                  <TypographyComponent
                    variant="body1"
                    color={theme.palette.text.primary}
                    children={`$${formatAmount(props.rate)}`}
                    data-testid="interest-amount"
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <StyledDivider />
        </Grid>
        <Grid item>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <TypographyComponent
                variant="h3"
                color={theme.palette.text.disabled}
                children={"Total Payable"}
              />
            </Grid>
            <Grid item>
              <TypographyComponent
                variant="h2"
                color={theme.palette.text.primary}
                children={`$${formatAmount(props.payout)}`}
                data-testid="payout-amount"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ReviewButton
            variant="contained"
            textVariant="subtitle1"
            color="primary"
            label={props.variant==="summary-slider"?"Review Your Credit": "Sumbit Your Credit"}
            onClick={props.handleReview}
            disabled={props.variant === "summary-review"? false: props.value > 0 ? false : true}
          />
        </Grid>
      </StyledGrid>
    </Box>
  );
};
