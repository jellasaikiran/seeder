import { Box, CircularProgress, styled, Typography } from "@mui/material";
import { theme } from "../../../theme/theme";
import TypographyComponent from "../../atoms/Typography";

interface Props {
  value: number;
}

const BackgroundProgress = styled(CircularProgress)({
  color: theme.palette.grey[200],
});

const UpperProgress = styled(CircularProgress)({
  color: theme.palette.accent.blue,
  position: 'absolute',
  left: 0,
});

export const ProgressBar = (props: Props) => {
  return (
    <>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <BackgroundProgress
          variant="determinate"
          size={80}
          value={100}
          thickness={5}
        />
        <UpperProgress
          variant="determinate"
          size={80}
          {...props}
          thickness={5}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypographyComponent
            variant="body2"
            color="accent.blue"
            children={`${Math.round(props.value)}%`}
          />
        </Box>
      </Box>
    </>
  );
};
