import React from 'react'
import styled from 'styled-components'

const Columns = ({ children }) => (
  <StyledColumns>
    {children}
  </StyledColumns>
)

export default Columns

const StyledColumns = styled.div`
  display: flex;
`