import React from 'react'
import styled from 'styled-components'

import Button from '../components/button'

const HomeSideBar = () => (
  <StyledBar>
    <div>
      <h1>Zhi &bull; Dao</h1>
      <h2>[zhi dao]</h2>
    </div>
    <h3><strong>De man die met zijn vinger de goede weg wijst</strong> Traditioneel Chinese Geneeskunde en Advies</h3>
    <Button to='/contact' label='Afspraak maken' />
  </StyledBar>
)

export default HomeSideBar

const StyledBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-content: space-evenly;
  align-items: center;

  h1, h2, h3 {
    text-align: center;
  }

  h1 {
    font-size: 1.875rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    font-style: italic;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`
