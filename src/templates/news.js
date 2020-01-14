import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const News = ({ items }) => (
  <StyledNews>
    {items.map(article => (
      <Article key={article.date} article={article} />
    ))}
  </StyledNews>
)

const Article = ({ article }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "header-image.jpg" }) {
        id
        childImageSharp {
          fluid (
            maxWidth: 1440
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div key={article.date} className='item'>
      <Img 
        fluid={data.file.childImageSharp.fluid}
        className='image'
      />
      <div className='date'>
        <p>{article.date}</p>
      </div>
      <div className='title'>
        <h3>{article.title}</h3>
      </div>
    </div>
  )
}

export default News

const StyledNews = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;

  .item {
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