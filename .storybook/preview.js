import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../src/theme/theme'
import { BrowserRouter } from 'react-router-dom'
import '../public/fonts/gilroy/gilroy.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'seeder',
    values: [
      {
        name: 'seeder',
        value: '#040407',
      },
    ],
  },  
}

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    </MUIThemeProvider>
  ),
]