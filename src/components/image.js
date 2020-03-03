import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Image = ({ fixed }) => (
  <StyledImage as={Img} fixed={fixed} />
)

export default Image

const StyledImage = styled.div`
  flex-shrink: 0;
  width: 360px;
  height: 270px;

  &:first-child { margin-right: 72px; }
  &:last-child { margin-left: 72px; }

  @media (max-width: ${p => p.theme.media.large}px) {
    order: -1;
    && { margin: 0 auto 2rem auto; }
    /* width: 100%; */
    max-width: 100%;
    max-height: 60vw;
  }
`