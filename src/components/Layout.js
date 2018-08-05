import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { injectGlobalStyle } from '../style'

export default function Layout({ children }) {
  injectGlobalStyle()

  return (
    <React.Fragment>
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }
          }
        `}
      >
        {({ site: { siteMetadata } }) => (
          <Helmet defaultTitle={siteMetadata.title}>
            <html lang="en" />
            <meta name="description" content={siteMetadata.description} />
            <meta
              name="google-site-verification"
              content="zW5Qv1X5zOnTIW9JssasZ0fJO5bXG8U7tkNmoPMLmBk"
            />
          </Helmet>
        )}
      </StaticQuery>
      <main>{children}</main>
    </React.Fragment>
  )
}
