import React, { Fragment } from 'react'
import styled from 'styled-components'
import { H1, H3 } from '../components/Title'
import heroBgUrl from '../assets/images/logo-background.svg'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1.2rem;
  color: white;
  text-align: center;
  background-image: url(${heroBgUrl});
  background-size: 260px;
  background-position: 50% 40%;
  background-repeat: no-repeat;

  & :last-child {
    margin-bottom: 0;
  }

  @media (min-width: 640px) {
    background-size: 440px;
  }
`

const IndexPage = () => (
  <Fragment>
    <Hero>
      <H1>Alexander Nanberg</H1>
      <H3>Fullstack developer &amp; designer</H3>
    </Hero>
  </Fragment>
)

export default IndexPage
