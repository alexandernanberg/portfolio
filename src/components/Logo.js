import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  display: inline-block;
  fill: currentColor;
  color: white;
`

const Logo = () => (
  <Svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.733 30l2.43-2.939h6.082l-2.293-4.585L25 20 30 30H16.733zM9.31 30H2L16 2l6.13 12.262-2.035 2.5L16 8.571 6.755 27.06h4.95L9.31 30z" />
  </Svg>
)

export default Logo
