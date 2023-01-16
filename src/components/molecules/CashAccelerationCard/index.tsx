import * as React from 'react'
import { styled } from '@mui/material/styles'
import { theme } from '../../../theme/theme'
import Illustration from '../../atoms/Illustration'
import TypographyComponent from '../../atoms/Typography'
import { NavigationItem } from '../navigationItem'
import info from '../../../../public/icons/info-circle-small.svg'

interface Props {
  icon: string
  title: string
  content: string
}

const Card = styled('div')({
  height: '100%',
  width: '100%',
  gap: '1.6rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundColor: `${theme.palette.elevation.color1}`,
})

const Icon = styled('div')({
  height: '2.6rem',
  width: '2.6rem',
  padding: '1.35rem',
  backgroundColor: `${theme.palette.grey[100]}`,
  border: '0.163rem solid ' + `${theme.palette.grey[300]}`,
  borderRadius: '0.85rem',
})

const Stack = styled('div')({
  height: '4.1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '0.6rem',
})

export default function CashAccelerationCard(props: Props) {
  return (
    <Card data-testid={'cashAcceleration-card'}>
      <Icon data-testid={'cashAcceleration-icon'}>
        <Illustration source={props.icon} alt={'icon'} />
      </Icon>
      <Stack data-testid={'cashAcceleration-stack'}>
        <NavigationItem
          variant={'normal'}
          icon={info}
          iconSelected={''}
          selected={false}
          text={props.title}
          textVariant="body1"
          color={`${theme.palette.text.secondary}`}
        />
        <TypographyComponent
          variant="h2"
          color={`${theme.palette.text.primary}`}
          data-testid="card-content"
        >
          {props.content}
        </TypographyComponent>
      </Stack>
    </Card>
  )
}
