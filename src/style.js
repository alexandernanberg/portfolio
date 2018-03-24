import { css, injectGlobal } from 'styled-components'
import { reset } from 'styled-reset'

export const breakpoints = {
  large: 1170,
  medium: 960,
  small: 620,
}

export const media = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${breakpoints[key]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

const fontFace = (name, weight, style, fonts) => css`
  @font-face {
    font-family: '${name}';
    font-weight: ${weight};
    font-style: ${style};
    font-display: fallback;
    src: ${fonts.map(font => `url('${font.src}') format('${font.format}')`).join(',')};
  }
` // prettier-ignore

export const injectGlobalStyle = () => injectGlobal`
/* stylelint-disable */
  ${reset} 
  ${fontFace('Visby', 400, 'normal', [
    { src: require('./assets/fonts/VisbyCF-Regular.woff2'), format: 'woff2' },
    { src: require('./assets/fonts/VisbyCF-Regular.woff'), format: 'woff' },
  ])}
  ${fontFace('Visby', 700, 'normal', [
    { src: require('./assets/fonts/VisbyCF-Bold.woff2'), format: 'woff2' },
    { src: require('./assets/fonts/VisbyCF-Bold.woff'), format: 'woff' },
  ])}
/* stylelint-enable */

  :root {
    --font-family: 'Visby', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --gray900: #010102;
    --gray800: #424242;
    --gray700: #616161;
    --gray600: #757575;
    --gray500: #808080;
    --gray400: #bdbdbd;
    --gray300: #e0e0e0;
    --gray200: #f5f5f5;
    --gray100: #fcf8f6;
    --red500: #c21717;
    --blue500: #2196f3;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--gray900);
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: inline-block;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
  }

  ::selection {
    color: white;
    background-color: var(--red500);
  }
`
