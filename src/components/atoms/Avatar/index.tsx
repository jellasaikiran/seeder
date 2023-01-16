import { Avatar, AvatarProps, styled } from '@mui/material'

interface Props extends AvatarProps {
  source: string
  alt: string
}

const CustomAvatar = styled(Avatar)({
  borderRadius: '1.0rem',
})

export const AvatarComponent = (props: Props) => {
  return (
    <CustomAvatar src={props.source} alt={props.alt} variant={props.variant} />
  )
}
