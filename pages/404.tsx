import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { H1, Text } from '../components/Text'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1.2rem;
  color: white;
  text-align: center;
`

export default function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <H1>404 - Not found</H1>
        <Text>
          You just found a page that doesn&#39;t exist...{' '}
          <span role="img" aria-label="sad">
            😢
          </span>
        </Text>
      </Container>
    </Layout>
  )
}
