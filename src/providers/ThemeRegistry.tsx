import { PropsWithChildren } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { theme } from '../theme'

const ThemeRegistry = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)

export default ThemeRegistry
