import React from 'react'
import styled from 'styled-components'

import Button from './button'

const Grid = ({ items }) => (
  <StyledGrid>
    {items.map(item => (
      <div key={item.buttonLink} className='item'>
        <item.icon />
        <p>{item.bodyText}</p>
        <Button 
          to={item.buttonLink}
          link={item.buttonLink}
          label={item.buttonText}
        />
      </div>
    ))}
  </StyledGrid>
)

export default Grid

const StyledGrid = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 64px;

  .item {
    height: 420px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 100px;
      height: 100px;
    }

    p {
      text-align: center;
      font-size: 1.125rem;
      line-height: 1.67;
    }

    a {
      align-self: stretch;
      height: 60px;
      background-color: ${p => p.theme.colors.red};

      color: ${p => p.theme.colors.white};
      font-size: 1.25rem;
      font-weight: 700;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

`