import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Button from './button'

const News = ({ edges }) => {

  const [showAmount, setAmount] = useState(6)

  const edgesToShow = edges.slice(0, showAmount)
  const increaseAmount = () => {
    setAmount(showAmount + 6)
  }

  return (
    <StyledNews>
      <div className='grid-wrapper'>
        {edgesToShow.map(({ node: { frontmatter } }) => (
          <Link
            key={frontmatter.path}
            className='item'
            to={frontmatter.path}
          >
            <Img
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
              className='image'
            />
            {/* <div className='date'>
              <p><strong>{frontmatter.day}</strong> {frontmatter.month}</p>
            </div> */}
            <div className='title'>
              <h3>{frontmatter.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      {showAmount < edges.length &&
        <div className='button-positioner'>
          <Button as='button' onClick={increaseAmount} label='Meer Klachten' />
        </div>
      }
    </StyledNews>
  )
}

export default News

const StyledNews = styled.div`

  .grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;

    @media (max-width: ${p => p.theme.media.max}px) { 
      grid-gap: 2rem;
    }

    @media (max-width: ${p => p.theme.media.large}px) {
      grid-template-columns: 1fr;
      grid-gap: 4rem;
      margin: 0 auto;
      max-width: 548px;
    }
  }

  a.item {
    height: 300px;
    max-height: 60vw;

    position: relative;

    .image {
      width: 100%;
      height: 100%;
    }

    .date, .title {
      position: absolute;
      z-index: 1;

      background-color: ${p => p.theme.colors.whiteOverlay};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .date {
      top: 2rem;
      left: 0px;
      width: 8rem;
      height: 4rem;

      p {
        color: ${p => p.theme.colors.cherry};
        font-size: 1.25rem;
      }
    }

    .title {
      bottom: 0;
      width: 100%;

      h3 {
        padding: 1.25rem;
        font-size: 1.25rem;
        font-weight: 700;
        text-align: center;
      }
    }

    &:hover {   
      .date, .title {
        background-color: ${p => p.theme.colors.red};
        p, h3 {
          color: ${p => p.theme.colors.white};
        }
      }
    }
  }

  .button-positioner {
    display: flex;
    justify-content: flex-end;
    margin-top: 4rem;
    @media (max-width: ${p => p.theme.media.large}px) {
      justify-content: center;
    }
    button {
      width: 16rem;
      &:hover {
        cursor: pointer;
      }
    }
  }

  

`