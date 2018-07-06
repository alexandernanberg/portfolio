import styled from 'styled-components'
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

export default Hero
