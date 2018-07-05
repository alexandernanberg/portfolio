import React from 'react'
import Layout from '../components/Layout'

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>404 - Not found</h1>
      <p>
        You just hit a route that doesn&#39;t exist...{' '}
        <span role="img" aria-label="sad">
          😢
        </span>
      </p>
    </Layout>
  )
}
