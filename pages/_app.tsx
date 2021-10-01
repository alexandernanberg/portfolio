import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../components/style'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
