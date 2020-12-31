import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './style/theme'
import { AppStyle } from './style/app'
import Routes from './routes'
import { GlobalStyle } from './style/globalStyle'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppStyle>
          <Routes />
          <GlobalStyle />
        </AppStyle>
      </ThemeProvider>
    </Router>
  )
}

export default App
