import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobalStyle } from '../style'
import Header from '../components/Header'

const TemplateWrapper = ({ children }) => {
  injectGlobalStyle()

  return (
    <div>
      <Helmet defaultTitle="Alexander Nanberg">
        <meta
          name="description"
          content="Alexander Nanberg is a full-stack developer &amp; designer."
        />
        <meta
          name="google-site-verification"
          content="zW5Qv1X5zOnTIW9JssasZ0fJO5bXG8U7tkNmoPMLmBk"
        />
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <Header />
      <main>{children()}</main>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default TemplateWrapper
