import Button, { ButtonProps } from '@mui/material/Button'
import { TypographyProps } from '@mui/material'
import TypographyComponent from '../Typography'

interface ButtonComponentProps extends ButtonProps {
  label: string
  textVariant?: TypographyProps['variant']
  textColor?: string
}

const ButtonComponent = (props: ButtonComponentProps) => {
  const { label, textVariant, textColor, ...rest } = props
  return (
    <div>
      <Button data-testid="button" type="button" {...rest}>
        <TypographyComponent children={label} variant={textVariant} color={textColor}/>
      </Button>
    </div>
  )
}

export default ButtonComponent