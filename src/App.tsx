import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import ThemeProvider from './components/theme/ThemeProvider'
import defaultTheme from './components/theme/defaultTheme'
import ExampleFade from './examples/ExampleFade'
import ExampleDelayModal from './examples/ExampleDelayModal'
import ExampleBackdrop from './examples/ExampleBackdrop'

const Main = styled.main`
  padding: 20px;
`

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global
        styles={{
          body: {
            padding: 0,
            margin: 0,
          },
        }}
      />
      <h1 style={{ textAlign: 'center' }}>examples</h1>
      <hr />
      <Main>
        <h2>Fade</h2>
        <ExampleFade />
        <h2>Backdrop</h2>
        <ExampleBackdrop />
        <h2>Delay Modal</h2>
        <ExampleDelayModal />
      </Main>
    </ThemeProvider>
  )
}

export default App
