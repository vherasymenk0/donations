import Logo from '~/assets/icons/logo.svg'
import './App.css'
import '@fontsource/red-hat-display/400.css'
import '@fontsource/red-hat-display/500.css'
import '@fontsource/red-hat-display/600.css'
import '@fontsource/red-hat-display/700.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
