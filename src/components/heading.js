import React from 'react'
import styled from 'styled-components'

const Heading = ({ heading }) => (
  <StyledHeading>
    <div className='line' />
    <h2>{heading}</h2>
    <div className='line' />
  </StyledHeading>
)

export default Heading

const StyledHeading = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 80px;

  .line {
    flex: 1;
    border: 1px solid ${p => p.theme.colors.black};
  }

  h2 {
    color: ${p => p.theme.colors.cherry};
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 20px;
  }

`