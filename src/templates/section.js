import React from 'react'
import styled from 'styled-components'

import Heading from './heading'

const Section = ({ heading, children }) => (
  <StyledSection>
    <div className='compress'>
      <Heading heading={heading} />
      {children}
    </div>
  </StyledSection>
)

export default Section

const StyledSection = styled.section`
  margin-top: 100px;
`