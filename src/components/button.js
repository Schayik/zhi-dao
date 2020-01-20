import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Grid = ({ link, label }) => (
  <StyledButton 
    as={Link} 
    to={link}
  >
    {label}
  </StyledButton>
)

export default Grid

const StyledButton = styled.div`

  align-self: stretch;
  height: 60px;
  background-color: ${p => p.theme.colors.red};

  color: ${p => p.theme.colors.white};
  font-size: 1.25rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 20px;
  text-align: center;

`