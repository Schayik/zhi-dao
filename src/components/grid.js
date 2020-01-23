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
  grid-gap: 4rem;

  @media (max-width: ${p => p.theme.media.max}px) { 
    grid-gap: 2rem;
  }

  @media (max-width: ${p => p.theme.media.large}px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }

  @media (max-width: ${p => p.theme.media.small}px) {
    grid-template-columns: 1fr;
  }

  .item {
    margin: 0 auto;
    max-width: 266px;
    height: 25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 6.25rem;
      height: 6.25rem;
    }

    p {
      text-align: center;
      font-size: 1.125rem;
      line-height: 1.67;
    }
  }

`