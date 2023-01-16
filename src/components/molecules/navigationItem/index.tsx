import { Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../../theme/theme'
import Illustration from '../../atoms/Illustration'
import TypographyComponent from '../../atoms/Typography'

interface Props {
  variant: 'functional' | 'normal'
  icon: string
  iconSelected: string
  selected: boolean
  text: string
  color?: string
  textVariant?: 'body1' | 'h2' | 'subtitle1'
}

const styles = {
  NavigationContainer: {
    alignItems: 'center',
    width: 'fit-content',
  },
  NavigationItem: {
    marginRight: 10,
  },
  NavigationIcon: {
    marginTop: 3,
  },
}

export const NavigationItem = (props: Props) => {
  if (props.variant === 'functional')
    return (
      <Grid container style={styles.NavigationContainer}>
        <Grid item style={styles.NavigationItem}>
          <Illustration
            source={props.selected ? props.iconSelected : props.icon}
            alt="icon"
          />
        </Grid>
        <Grid item>
          <TypographyComponent
            data-testid="menuText"
            variant="subtitle2"
            color={props.selected ? theme.palette.text.primary : props.color}
            children={props.text}
          />
        </Grid>
      </Grid>
    )
  else
    return (
      <Grid container style={styles.NavigationContainer}>
        <Grid item style={styles.NavigationItem}>
          <Typography
            data-testid="text"
            variant={props.textVariant}
            color={props.color}
            children={props.text}
          />
        </Grid>
        <Grid item style={styles.NavigationIcon}>
          <Illustration source={props.icon} alt="icon" />
        </Grid>
      </Grid>
    )
}
