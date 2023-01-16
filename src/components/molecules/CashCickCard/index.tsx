import { Box, Grid, Stack, styled, Typography } from '@mui/material'
import { theme } from '../../../theme/theme'
import ButtonComponent from '../../atoms/Button'
import TypographyComponent from '../../atoms/Typography'

const CardContainer = styled(Box)({
  padding: 32,
  background: theme.palette.elevation.color1,
  border: `0.163rem solid ${theme.palette.grey[300]}`,
  borderRadius: 12,
})

const GridContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
})

const HeadItem = styled(Grid)({
  paddingBottom: 12,
  width: '50%',
})

const TextItem = styled(Grid)({
  paddingBottom: 12,
})

const ButtonItem = styled(Grid)({
  paddingTop: 8,
})

const StyledButton = styled(ButtonComponent)({
  height: 60,
  borderRadius: 12,
  color: theme.palette.grey[500],
  textTransform: 'capitalize',
})

interface Props {
  balanceAmount: string
  handleClick: () => void
}

export const CashKickCard = (props: Props) => {
  return (
    <CardContainer>
      <GridContainer>
        <Grid item>
          <GridContainer>
            <HeadItem item>
              <TypographyComponent
                variant="h2"
                color={theme.palette.text.primary}
                children="Launch a new Cash Kick"
              />
            </HeadItem>
            <TextItem item>
              <Stack direction="row">
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text.disabled}
                  children="You have upto"
                />
                &nbsp;
                <TypographyComponent
                  variant="caption2"
                  color={theme.palette.text.secondary}
                  children={props.balanceAmount}
                  data-testid="balanceAmount"
                />
                &nbsp;
                <Typography
                  variant="body1"
                  color={theme.palette.text.disabled}
                  children="available"
                />
              </Stack>
              <TypographyComponent
                variant="body1"
                color={theme.palette.text.disabled}
                children="for a new cash advance"
              />
            </TextItem>
          </GridContainer>
        </Grid>
        <ButtonItem item>
          <StyledButton
            data-testid="cashKickButton"
            variant="contained"
            color="primary"
            textVariant="subtitle1"
            label="New Cash Kick"
            fullWidth
            onClick={props.handleClick}
          />
        </ButtonItem>
      </GridContainer>
    </CardContainer>
  )
}
