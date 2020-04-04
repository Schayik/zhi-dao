import React from "react"
import styled from 'styled-components'

const Address = () => <StyledAddress>Zhi Dao<br />Aan de Dril 10<br />5801 HX Venray<br />kvk 12049965</StyledAddress>

export default Address

const StyledAddress = styled.p`
  margin-top: 8px;
  font-size: 1.25rem;
  line-height: 1.5;

  @media(max-width: ${p => p.theme.media.large}px) {
    text-align: center;
  }
  
`