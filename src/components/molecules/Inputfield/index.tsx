import InputAdornment from '@mui/material/InputAdornment'
import TextField, { StandardTextFieldProps } from '@mui/material/TextField'
import Illustration from '../../atoms/Illustration'
import { styled } from '@mui/material'
import { theme } from '../../../theme/theme'

interface InputProps extends StandardTextFieldProps {
  startIcon?: string
  placeHolder: string
  width?: string
  value: string | null
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledTextField = styled(TextField)((props: {placeHolder:string }) => ({
  backgroundColor: props.placeHolder == 'Ex: marketing expenses' ? theme.palette.grey[200] : theme.palette.grey[100],
  height: 56,
  borderRadius: '0.85rem',
  border: `0.163rem solid ${theme.palette.grey[600]}`,
  '& .MuiOutlinedInput-root': {
    borderRadius: '0.85rem',
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary[400],
      borderRadius: '0.85rem',
    },
    '&.Mui-hover fieldset': {
      borderColor: theme.palette.primary[400],
    },
  },
}))

const InputField = (props: InputProps) => {
  return (
    <div>
      <StyledTextField placeHolder={props.placeHolder} sx={{ width:`${props.width}`, input: { color: theme.palette.text.secondary }}} 
        placeholder={props.placeHolder}
        id="textinputfield"
        value={props.value}
        onChange={props.handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Illustration source={props.startIcon!} alt={''} />
            </InputAdornment>
          ),
        }}
      ></StyledTextField>
    </div>
  )
}
export default InputField
