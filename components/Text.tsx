import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: var(--font-family);
  font-weight: 700;
  line-height: 1.2em;
  margin-bottom: 0.2em;
  font-size: 3.2rem;
  letter-spacing: -1px;
`

export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.5em;
  color: var(--gray600);
  margin-bottom: 0.2em;

  @media (min-width: 640px) {
    font-size: 1.8rem;
  }
`
