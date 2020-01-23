import React from 'react'
import styled from 'styled-components'

import Heading from './heading'

const Section = ({ id, heading, children }) => {

  const count = React.Children.toArray(children).length

  return (
    <StyledSection id={id}>
      <div className='compress'>
        {heading && <Heading heading={heading} />}
        {count === 1 && children}
        {count === 2 && 
          <div className='wrapper'>
            {children}
          </div>
        }
      </div>
    </StyledSection>
  )
}
  

export default Section

const StyledSection = styled.section`
  padding-top: 6.25rem;

  .wrapper {
    display: flex;
  }
`