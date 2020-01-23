import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Image = ({ fixed }) => (
  <StyledImage as={Img} fixed={fixed} />
)

export default Image

Image.defaultProps = {
  side: 'left'
}

const StyledImage = styled.div`
  flex-shrink: 0;
  width: 360px;
  height: 270px;

  &:first-child { margin-right: 72px; }
  &:last-child { margin-left: 72px; }
`