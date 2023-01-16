import * as React from 'react'
import { styled } from '@mui/material/styles'
import { theme } from '../../../theme/theme'
import Typography from '../Typography'

interface Props {
  variant: 'payment' | 'tablecell' | 'loading'
  content: string
}

const Div = styled('div')(
  (props: { variant: 'payment' | 'tablecell' | 'loading' }) => ({
    height: '1.163rem',
    width: props.variant === 'loading' ? '3.975rem' : 'fit-content',
    borderRadius: '0.35rem',
    padding: '0.35rem 0.6rem 0.35rem 0.6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:
      props.variant === 'payment'
        ? `${theme.palette.elevation.color1}`
        : `${theme.palette.text.secondary}`,
    backgroundColor:
      props.variant === 'payment'
        ? `${theme.palette.accent.pink}`
        : `${theme.palette.elevation.color2}`,
  })
)

export default function Chip(props: Props) {
  return (
    <Div variant={props.variant} data-testid={'chip-' + props.variant}>
      <Typography variant="body2">{props.content}</Typography>
    </Div>
  )
}
