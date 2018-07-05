import React from 'react'
import Helmet from 'react-helmet'
import { injectGlobalStyle } from '../style'

export default function Layout({ children }) {
  injectGlobalStyle()

  return (
    <React.Fragment>
      <Helmet defaultTitle="Alexander Nanberg">
        <html lang="en" />
        <meta
          name="description"
          content="Alexander Nanberg is a full-stack developer &amp; designer."
        />
        <meta
          name="google-site-verification"
          content="zW5Qv1X5zOnTIW9JssasZ0fJO5bXG8U7tkNmoPMLmBk"
        />
      </Helmet>
      <main>{children}</main>
    </React.Fragment>
  )
}
