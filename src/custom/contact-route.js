import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Route = ({ fluid1, fluid2 }) => (
  <StyledRoute>
    <Img fluid={fluid1} />
    <Img className='image-2' fluid={fluid2} />
    <ul>
      <li>1. In Venray de borden richting het Ziekenhuis volgen.</li>
      <li>2. Het ziekenhuis voorbij rijden</li>
      <li>3. Op de verkeersdrempel (na ongeveer 200 meter) linksaf.</li>
    </ul>
  </StyledRoute>
)

export default Route

const StyledRoute = styled.div`
  .image-2 {
    margin: 64px 0;
  }

  ul {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`