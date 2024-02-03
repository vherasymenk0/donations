import { Stack } from '@mui/material'

import ThemeRegistry from './providers/ThemeRegistry'
import { palette } from './theme/palette'
import { MainView } from './views/main'

const App = () => (
  <ThemeRegistry>
    <Stack component="main" sx={{ backgroundColor: palette.grey['300'], height: '100%' }}>
      <MainView />
    </Stack>
  </ThemeRegistry>
)

export default App
