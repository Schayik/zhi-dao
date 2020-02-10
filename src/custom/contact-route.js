import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Route = ({ fluid1, fluid2 }) => (
  <StyledRoute>
    <Img className='image' fluid={fluid1} />
    <Img className='image' fluid={fluid2} />
    <ul>
      <li>1. In Venray de borden richting het Ziekenhuis volgen.</li>
      <li>2. Het ziekenhuis voorbij rijden</li>
      <li>3. Op de verkeersdrempel (na ongeveer 200 meter) linksaf.</li>
    </ul>
  </StyledRoute>
)

export default Route

const StyledRoute = styled.div`
  .image {
    margin-bottom: 4rem;
    width: 100%;
    height: 16rem;
  }

  ul {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`