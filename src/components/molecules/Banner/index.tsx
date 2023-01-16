import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../theme/theme";
import banner from "../../../../public/illustrations/banner.svg";
import TypographyComponent from "../../atoms/Typography";
import ButtonComponent from "../../atoms/Button";
import { GREETING, FUNDING, AMOUNT } from "../../../utils/constants";
import Illustration from "../../atoms/Illustration";

const StyledBox = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxHeight: "100%",
  backgroundColor: theme.palette.primary.main,
  backgroundSize: "100%",
  borderRadius: "12px",
});

const TextContainer = styled(Grid)({
  width: "35%",
  margin: "16px 32px",
});

const ImageContainer = styled(Grid)({
  marginRight: "16px",
});

const TextItem = styled(Grid)({
  paddingTop: "0.6rem",
  paddingBottom: "0.6rem",
});

const StyledButton = styled(ButtonComponent)({
  height: "3.85rem",
  width: "9.975rem",
  borderRadius: "0.85rem",
  color: theme.palette.grey[500],
  borderColor: theme.palette.grey[500],
  "&:hover": {
    borderColor: theme.palette.grey[500],
  },
});

export const Banner = () => {
  return (
    <StyledBox data-testid="banner">
      <TextContainer container>
        <TextItem item>
          <TypographyComponent
            variant="h2"
            color={theme.palette.grey[400]}
            children={GREETING}
          />
        </TextItem>
        <TextItem item>
          <Typography variant="body1" color={theme.palette.text.primary}>
            {FUNDING}
            <Typography variant="caption2" color={theme.palette.text.primary}>
              {AMOUNT}
            </Typography>
          </Typography>
        </TextItem>
        <TextItem item>
          <StyledButton variant="outlined" label="Learn More" />
        </TextItem>
      </TextContainer>
      <ImageContainer>
        <Illustration source={banner} alt={"cone"} />
      </ImageContainer>
    </StyledBox>
  );
};
