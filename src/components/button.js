import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Grid = ({ label, ...props }) => (
  <StyledButton
    as={Link}
    {...props}
  >
    {label}
  </StyledButton>
)



export default Grid

const StyledButton = styled.a`

  align-self: stretch;
  height: 3.75rem;
  background-color: ${p => p.theme.colors.red};

  color: ${p => p.theme.colors.white};
  font-size: 1.25rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1.25rem;
  text-align: center;

  &:hover {
    background-color: ${p => p.theme.colors.cherry};
  }
`