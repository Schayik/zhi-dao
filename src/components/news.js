import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const News = ({ edges }) => (
  <StyledNews>
    {edges.map(({ node: { frontmatter } }) => (
      <Link 
        key={frontmatter.path}
        className='item' 
        to={frontmatter.path}
      >
        <Img 
          fluid={frontmatter.featuredImage.childImageSharp.fluid}
          className='image'
        />
        <div className='date'>
          <p><strong>{frontmatter.day}</strong> {frontmatter.month}</p>
        </div>
        <div className='title'>
          <h3>{frontmatter.title}</h3>
        </div>
      </Link>
    ))}
  </StyledNews>
)

export default News

const StyledNews = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;

  a.item {
    height: 300px;
    position: relative;
    background-color: yellow;

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
      top: 32px;
      left: 0px;
      width: 128px;
      height: 64px;

      p {
        color: ${p => p.theme.colors.cherry};
        font-size: 1.25rem;
      }
    }

    .title {
      bottom: 0;
      width: 100%;

      h3 {
        padding: 20px;
        font-size: 1.25rem;
        font-weight: 700;
        text-align: center;
      }
    }
  }

`