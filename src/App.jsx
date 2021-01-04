import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './style/theme'
import { AppStyle } from './style/app'
import Routes from './components/routes'
import { GlobalStyle } from './style/globalStyle'
import Navigation from './components/organisms/Navigation'

import configureStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'
const store = configureStore()

function App() {
  const dark = true

  return (
    <ReduxProvider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <AppStyle dark={dark}>
            <Routes dark={dark} />
            <Navigation dark={dark} />
            <GlobalStyle />
          </AppStyle>
        </ThemeProvider>
      </Router>
    </ReduxProvider>
  )
}

export default App
