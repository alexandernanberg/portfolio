import type { AppProps } from 'next/app'
import { StyleSheetManager } from 'styled-components'
import '../styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Component {...pageProps} />
    </StyleSheetManager>
  )
}
