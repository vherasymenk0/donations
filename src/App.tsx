import { Stack } from '@mui/material'

import List from './components/List'
import ThemeRegistry from './providers/ThemeRegistry'
import { palette } from './theme/palette'

const App = () => (
  <ThemeRegistry>
    <Stack component="main" sx={{ backgroundColor: palette.primary['600'], height: '100%' }}>
      <List />
    </Stack>
  </ThemeRegistry>
)

export default App
