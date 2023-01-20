import {
  Box,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
} from '@mui/material'
import { AvatarComponent } from '../../atoms/Avatar'
import TypographyComponent from '../../atoms/Typography'
import avatar from '../../../../public/logo/Rectangle_554.svg'
import React from 'react'
import Illustration from '../../atoms/Illustration'
import downArrow from '../../../../public/logo/Vector.svg'
import { Logout } from '@mui/icons-material'
import { theme } from '../../../theme/theme'
import { LOGOUT } from '../../../utils/constants'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  title: string
  subtitle: string
  width: number
}

const StyledGrid = styled(Grid)({
  backgroundColor: theme.palette.background.default,
})

const StyledLogout = styled(Logout)({
  color: theme.palette.text.primary,
})

const Header = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { logout } = useAuth0()
  return (
    <StyledGrid
      container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width={`${props.width}%`}
      height={100}
    >
      <Grid item>
        <Grid container direction={'row'} paddingLeft={0}>
          <TypographyComponent
            fontWeight={700}
            variant="h4"
            color={theme.palette.text.primary}
            data-testid="header-title"
          >
            {props.title}
          </TypographyComponent>
        </Grid>
        <Grid container direction={'column'} paddingLeft={0}>
          <TypographyComponent
            fontWeight={500}
            variant="body1"
            color={theme.palette.text.disabled}
            data-testid="header-subtitle"
          >
            {props.subtitle}
          </TypographyComponent>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container paddingRight={0}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              data-testid="profile"
            >
              <Grid container direction={'row'}>
                <Grid item paddingRight={2}>
                  <AvatarComponent source={avatar} alt={'avatar'} />
                </Grid>
                <Illustration source={downArrow} alt={'img'} />
              </Grid>
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                backgroundColor: theme.palette.grey[100],
              },
            }}
            data-testid="logout-screen"
          >
            <MenuItem
              onClick={() => logout({ returnTo: window.location.origin })}
              data-testid="logout"
            >
              <ListItemIcon>
                <StyledLogout fontSize="small" data-testid={`logouticon`} />
              </ListItemIcon>
              <TypographyComponent
                variant="body1"
                color={theme.palette.text.primary}
              >
                {LOGOUT}
              </TypographyComponent>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </StyledGrid>
  )
}
export default Header
