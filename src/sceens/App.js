import React from 'react'
import { ThemeProvider } from 'styled-components'
import Route from '../config/router'
import { theme } from '../config/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route></Route>
    </ThemeProvider>
  )
}

export default App
