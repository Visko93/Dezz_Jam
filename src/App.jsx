import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './style/theme'
import { AppStyle } from './style/app'
import Routes from './components/routes'
import { GlobalStyle } from './style/globalStyle'
import Navigation from './components/organisms/Navigation'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppStyle>
          <Routes />
          <Navigation />
          <GlobalStyle />
        </AppStyle>
      </ThemeProvider>
    </Router>
  )
}

export default App
