import styled from 'styled-components'

const Title = styled.h1`
  margin-bottom: 0.2em;
  font-family: var(--font-family);
  font-weight: 700;
  line-height: 1.2em;
`

export const H1 = styled(Title)`
  margin-bottom: 0.2em;
  font-size: 3rem;

  @media (min-width: 640px) {
    font-size: 7.2rem;
  }
`

export const H3 = styled(Title.withComponent('h3'))`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 1px;

  @media (min-width: 640px) {
    font-size: 3.4rem;
  }
`
