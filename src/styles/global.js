// import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import GatsbyStyle from './gatsby.js'

const GlobalStyle = createGlobalStyle`

  /* ${GatsbyStyle} */

  /* @import url('https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i&display=swap'); */

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    @media (max-width: ${p => p.theme.media.max}px) {
      font-size: 90%;
    }
  }

  body {
    font-family: 'Merriweather', serif;

    margin: 0;

    width: 100vw;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p, button, input, textarea {
    font-family: 'Merriweather', serif;
    font-weight: 400;
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
  }

  .compress {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2.5rem;
    height: 100%;
  }

`

export default GlobalStyle