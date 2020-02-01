import styled, { css } from 'styled-components'

const baseStyle = css`
  margin-bottom: 0.2em;
  font-family: var(--font-family);
  font-weight: 700;
  line-height: 1.2em;
`

export const H1 = styled.h1`
  ${baseStyle}
  margin-bottom: 0.2em;
  font-size: 3rem;

  @media (min-width: 640px) {
    font-size: 7.2rem;
  }
`

export const H3 = styled.h3`
  ${baseStyle}
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 1px;

  @media (min-width: 640px) {
    font-size: 3.4rem;
  }
`
