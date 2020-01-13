import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Header = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "header-image.jpg"}) {
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

  console.log(data)

  return (
    <StyledHeader>
      <Img
        className="image"
        fluid={data.file.childImageSharp.fluid}
        alt={title}
        style={{ position: 'absolute' }}
      />
      <div className='compress'>
        <div className='sidebar'>
          <h1>{title}</h1>
        </div>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 500px;
  position: relative;

  .image {
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  .compress {
    display: flex;
    justify-content: flex-end;
    height: 100%;

    .sidebar {
      width: ${p => p.theme.sidebar.width}px;
      background-color: ${p => p.theme.colors.whiteOverlay};

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }

`

export default Header
