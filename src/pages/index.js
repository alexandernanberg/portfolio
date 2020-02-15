import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { H1, H3 } from '../components/Title'
import Hero from '../components/Hero'
import Icon from '../components/Icon'
import Spacer from '../components/Spacer'

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
            aria-label="Dribble"
          >
            <Icon glyph="dribble" />
          </Link>
        </LinkWrapper>
      </Hero>
    </Layout>
  )
}
