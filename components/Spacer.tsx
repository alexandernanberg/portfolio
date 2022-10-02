import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSize = (name: string) => (props: any) =>
  props[name] ? `var(--size-${props[name]})` : undefined

interface SpacerProps {
  h?: number
  w?: number
}

const Spacer = styled.div<SpacerProps>`
  width: ${getSize('w')};
  height: ${getSize('h')};
`

export default Spacer
