import styled from 'styled-components'
// import { createGlobalStyle } from 'styled-components'

import GatsbyStyle from './gatsby.js'

const GlobalStyle = styled.div`

  /* ${GatsbyStyle} */

  @import url('https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i&display=swap');

  body {
    font-family: 'Merriweather', serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: 'Merriweather', serif;
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

  .compress {
    max-width: 1439px;
    margin: 0 auto;
    padding: 0 40px;
  }

`

export default GlobalStyle