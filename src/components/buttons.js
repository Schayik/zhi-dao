import React from 'react'
import styled from 'styled-components'

import Button from './button'

const Buttons = ({ buttons }) => (
  <StyledButtons>
    <ul>
      {buttons.map(button => (
        <li key={button.label}>
          {button.Pre && <button.Pre />}
          <Button {...button} />
          {button.Post && <button.Post />}
        </li>
      ))}
    </ul>
  </StyledButtons>
)

export default Buttons

const StyledButtons = styled.div`
  flex-shrink: 0;
  width: ${p => p.theme.sidebar.width};

  padding: 0 2rem;
  margin-left: 2rem;

  li:not(:first-child) {
    margin-top: 20px;
  }

  @media (max-width: ${p => p.theme.media.large}px) {
    order: -1;
    margin: 0 auto 4rem auto;
  }
`