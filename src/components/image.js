import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import THEME from '../styles/theme'

const rectStyle = { width: '360px', height: '270px' }
const squareStyle = { width: THEME.sidebar.width, height: '17rem' }

const Image = ({ fixed, isSquare=false, isBottom=false }) => (
  <StyledImage as={Img} fixed={fixed} style={isSquare ? squareStyle : rectStyle} className={isBottom ? 'bottom' : 'top'} />
)

export default Image

const StyledImage = styled.div`
  flex-shrink: 0;

  &:first-child { margin-right: 72px; }
  &:last-child { margin-left: 72px; }

  @media (max-width: ${p => p.theme.media.large}px) {
    order: -1;
    && { margin: 0 auto 2rem auto; }
    /* width: 100%; */
    max-width: 100%;
    max-height: 60vw;

    &.bottom {
      order: 1;
      && { margin: 2rem 0 0 0; }
    }
  }
`