import ThemeRegistry from './providers/ThemeRegistry'
import { MainView } from './views/main'
import { MainLayout } from './layouts/main'

const App = () => (
  <ThemeRegistry>
    <MainLayout>
      <MainView />
    </MainLayout>
  </ThemeRegistry>
)

export default App
