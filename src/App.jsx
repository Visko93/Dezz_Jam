import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './style/theme'
import { AppStyle } from './style/app'
import Routes from './components/routes'
import { GlobalStyle } from './style/globalStyle'
import Navigation from './components/organisms/Navigation'
import ThemeToggle from './components/organisms/ThemeToggle'

import configureStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'
const store = configureStore()

function App() {
  const [theme, setTheme] = React.useState(false)

  const handleTheme = () => {
    setTheme((prevTheme) => !prevTheme)
  }
  return (
    <ReduxProvider store={store}>
      <Router>
        <AppStyle dark={theme}>
          <ThemeToggle props={{ theme, handleTheme }} />
          <Routes dark={theme} />
          <Navigation dark={theme} />
          <GlobalStyle />
        </AppStyle>
      </Router>
    </ReduxProvider>
  )
}

export default App
