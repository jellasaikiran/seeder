import * as React from 'react'
import { styled } from '@mui/material/styles'
import { theme } from '../../../theme/theme'
import { Grid } from '@mui/material'
import CashAccelerationCard from '../../molecules/CashAccelerationCard'
import calender from '../../../../public/icons/calendar.svg'
import document from '../../../../public/icons/document-download.svg'
import percentage from '../../../../public/icons/percentage-square.svg'

const GridWrapper = styled(Grid)({
  height: '16.8rem',
  padding: '2.1rem',
  borderRadius: '0.85rem',
  justifyContent: 'space-around',
  alignItems: 'center',
  border: `0.163rem solid ${theme.palette.grey[300]}`,
  backgroundColor: `${theme.palette.elevation.color1}`,
})

export default function CardsGrid() {
  const termCap = '12 months'
  const credit = '$880.0k'
  const interest = '12.00%'

  return (
    <GridWrapper container data-testid={'cards-grid'}>
      <Grid item>
        <CashAccelerationCard
          icon={calender}
          title={'Term cap'}
          content={termCap}
        />
      </Grid>
      <Grid item>
        <CashAccelerationCard
          icon={document}
          title={'Available credit'}
          content={credit}
        />
      </Grid>
      <Grid item>
        <CashAccelerationCard
          icon={percentage}
          title={'Max interest rate'}
          content={interest}
        />
      </Grid>
    </GridWrapper>
  )
}
