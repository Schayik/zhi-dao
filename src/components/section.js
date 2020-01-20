import React from 'react'
import styled from 'styled-components'

import Heading from './heading'

const Section = ({ id, heading, children }) => (
  <StyledSection id={id}>
    <div className='compress'>
      {heading && <Heading heading={heading} />}
      {children}
    </div>
  </StyledSection>
)

export default Section

const StyledSection = styled.section`
  padding-top: 100px;
`