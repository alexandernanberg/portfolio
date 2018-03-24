import styled from 'styled-components'

const Title = styled.h1`
  margin-bottom: 0.2em;
  font-family: var(--font-family);
  font-weight: 700;
  line-height: 1.2em;
`

export const H1 = Title.extend`
  margin-bottom: 0.33em;
  font-size: 3rem;

  @media (min-width: 640px) {
    font-size: 7.2rem;
  }
`

export const H3 = Title.withComponent('h3').extend`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 1px;

  @media (min-width: 640px) {
    font-size: 3.4rem;
  }
`
