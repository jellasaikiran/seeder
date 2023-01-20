import * as React from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import { theme } from '../../../theme/theme'

interface Props {
  value?: number
  handleChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void
  max: number
}

const CustomSlider = styled(Slider)({
  width: '100%',
  color: `${theme.palette.primary.main}`,
  height: '0.6rem',
  borderRadius: '0.6rem',
  '& .MuiSlider-thumb': {
    color: `${theme.palette.primary.main}`,
    border: '0.288rem solid' + `${theme.palette.primary[400]}`,
    width: '1.538rem',
    height: '1.538rem',
    borderRadius: '0.6rem',
  },
  '& .MuiSlider-rail': {
    color: `${theme.palette.grey[200]}`,
    backgroundColor: `${theme.palette.grey[200]}`,
  },
  '& .MuiSlider-mark': {
    backgroundColor: 'transparent',
  },
})

const Div = styled('div')({
  height: '1.538rem',
  width: '100%',
})

export default function SummarySlider(props: Props) {
  return (
    <Div>
      <CustomSlider
        data-testid="slider"
        value={props.value}
        onChange={props.handleChange}
        max={props.max}
        valueLabelDisplay="auto"
      />
    </Div>
  )
}
