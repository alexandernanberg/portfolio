import Head from 'next/head'
import styled from 'styled-components'
import { Container } from '../components/Container'
import Layout from '../components/Layout'
import { Link } from '../components/Link'
import Spacer from '../components/Spacer'
import { H1, Text } from '../components/Text'

const LinkWrapper = styled.div`
  display: flex;
  gap: var(--size-3);
`

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Alexander Nanberg</title>
      </Head>
      <Container>
        <H1>Alexander Nanberg</H1>
        <Text>
          Software engineer &amp; designer with a passion for building wonderful
          user experiences.
        </Text>
        <Spacer h={5} />
        <LinkWrapper>
          <Link
            href="https://github.com/alexandernanberg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GithHub"
          >
            <span>GitHub</span> ↗
          </Link>
          <Link
            href="https://www.linkedin.com/in/alexander-nanberg-5b9864115/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <span>LinkedIn</span> ↗
          </Link>
          <Link
            href="https://dribbble.com/alexandernanberg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
          >
            <span>Dribbble</span> ↗
          </Link>
        </LinkWrapper>
      </Container>
    </Layout>
  )
}
