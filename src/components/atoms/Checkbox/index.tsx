import { Box, Checkbox, CheckboxProps, styled } from '@mui/material'
import { theme } from '../../../theme/theme'

const StyledCheckBox = styled(Checkbox)({
  height: '1.1rem',
  width: '1.1rem',
  color: `${theme.palette.grey[700]}`,
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
  },
  '&.Mui-checked': {
    color: theme.palette.primary[400],
  },
  '&.MuiCheckbox-indeterminate': {
    color: `${theme.palette.grey[100]}`,
    backgroundColor: `${theme.palette.grey[700]}`,
    border: `0.163rem solid ${theme.palette.grey[700]}`,
    borderRadius: '0.381rem',
  },
})

interface Props extends CheckboxProps {}

export default function CheckboxComponent(props: Props) {
  return (
    <Box>
      <StyledCheckBox
        data-testid={`checkbox`}
        onChange={props.onChange}
        checked={props.checked}
        indeterminate={props.indeterminate}
      />
    </Box>
  )
}
