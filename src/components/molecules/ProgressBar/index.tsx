import { Box, CircularProgress, styled } from "@mui/material";
import { theme } from "../../../theme/theme";
import TypographyComponent from "../../atoms/Typography";

interface Props {
  value: number;
}

const FixedBox = styled(Box)({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CustomProgressBar = styled(CircularProgress)(
  (props: { type: "grey" | "blue" }) => ({
    color:
      props.type === "grey"
        ? theme.palette.grey[200]
        : theme.palette.accent.blue,
    position: props.type === "grey" ? "static" : "absolute",
    left: 0,
  })
);

export const ProgressBar = (props: Props) => {
  return (
    <>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CustomProgressBar
          type="grey"
          variant="determinate"
          size={80}
          value={100}
          thickness={5}
        />
        <CustomProgressBar
          type="blue"
          variant="determinate"
          size={80}
          {...props}
          thickness={5}
        />
        <FixedBox>
          <TypographyComponent
            variant="body2"
            color="accent.blue"
            children={`${Math.round(props.value)}%`}
          />
        </FixedBox>
      </Box>
    </>
  );
};
