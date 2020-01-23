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
  width: ${p => p.theme.sidebar.width}px;

  padding: 0 32px;
  margin-left: 32px;

  li:not(:first-child) {
    margin-top: 20px;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`