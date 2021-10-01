import Head from 'next/head'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import Spacer from '../components/Spacer'
import { H1, H3 } from '../components/Text'

const Link = styled.a`
  font-size: var(--size-4);
  color: white;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    margin: 0 var(--size-2);
  }
`

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Alexander Nanberg</title>
      </Head>
      <Hero>
        <H1>Alexander Nanberg</H1>
        <H3>Full-stack developer &amp; designer</H3>
        <Spacer h={5} />
        <LinkWrapper>
          <Link
            href="https://github.com/alexandernanberg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <Icon glyph="github" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alexander-nanberg-5b9864115/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <Icon glyph="linkedin" />
          </Link>
          <Link
            href="https://dribbble.com/alexandernanberg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
          >
            <Icon glyph="dribbble" />
          </Link>
        </LinkWrapper>
      </Hero>
    </Layout>
  )
}
