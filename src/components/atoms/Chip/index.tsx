import * as React from "react";
import { styled } from "@mui/material/styles";
import { theme } from "../../../theme/theme";
import Typography from "../Typography";
import { Chip } from "@mui/material";

interface Props {
  variant: "payment" | "tablecell" | "loading";
  content: string;
}

const StyledChip = styled(Chip)(
  (props: { customVariant: "payment" | "tablecell" | "loading" }) => ({
    height: "1.163rem",
    width: props.customVariant === "loading" ? "5rem" : "fit-content",
    borderRadius: "0.35rem",
    padding: "1rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...theme.typography.body2,
    color:
      props.customVariant === "payment"
        ? `${theme.palette.elevation.color1}`
        : `${theme.palette.text.secondary}`,
    backgroundColor:
      props.customVariant === "payment"
        ? `${theme.palette.accent.pink}`
        : `${theme.palette.elevation.color2}`,
  })
);

export default function ChipSet(props: Props) {
  return (
    <>
      <StyledChip customVariant={props.variant} label={props.content} />
    </>
  );
}
