import { Dialog, Grid, Box } from "@mui/material";
import Illustration from "../../atoms/Illustration";
import TypographyComponent from "../../atoms/Typography";
import closeIcon from "../../../../public/icons/cross.svg";
import { theme } from "../../../theme/theme";
import InputField from "../../molecules/Inputfield";
import { styled } from "@mui/system";
import ButtonComponent from "../../atoms/Button";

interface Props {
  open: boolean;
  handleClose: () => void;
  disabled: boolean;
  handleInputBox: (cashkickName:string) => void;
  handleSubmit: () => void;
  input: string
}

const CashKickButton = styled(ButtonComponent)({
  height: "3.85rem",
  borderRadius: "0.85rem",
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 40,
  paddingRight: 40,
  "&.Mui-disabled": {
    color: theme.palette.text.disabled,
    background: theme.palette.primary[600],
  },
  textTransform: "capitalize",
});

const CancelButton = styled(ButtonComponent)({
  height: "3.85rem",
  borderRadius: "0.85rem",
  padding: "20px 40px",
  marginRight: 12,
  background: theme.palette.elevation.color2,
  color: theme.palette.text.secondary,
  textTransform: "capitalize",
});

const StyledGrid = styled(Grid)({
  width: "fit-content",
  background: theme.palette.grey[100],
});

export const SubmitModal = (props: Props) => {
  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <StyledGrid container direction={"column"} p={10}>
          <Grid
            item
            container
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item direction={"column"}>
              <Grid item>
                <TypographyComponent
                  children="Name your cash kick"
                  variant="h2"
                />
              </Grid>
              <Grid item>
                <TypographyComponent
                  children="Add a name to identify your cash kick"
                  variant="body1"
                  color={theme.palette.text.disabled}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Box onClick={props.handleClose}>
                <Illustration source={closeIcon} alt={"close"} />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={13}>
            <TypographyComponent
              children="Cash kick name"
              variant="body1"
              color={theme.palette.text.disabled}
            />
          </Grid>
          <Grid item mt={2}>
            <InputField
              placeHolder={"Ex: marketing expenses"}
              value={props.input}
              width={"31.475rem"}
              handleChange={(e) => props.handleInputBox(e.target.value)}
            />
          </Grid>
          <Grid item container justifyContent={"flex-end"} mt={10}>
            <CancelButton variant="contained" label={"Cancel"} onClick={props.handleClose}/>

            <CashKickButton
              variant="contained"
              label={"Create Cash Kick"}
              disabled={props.disabled}
              onClick={props.handleSubmit}
            />
          </Grid>
        </StyledGrid>
      </Dialog>
    </>
  );
};
