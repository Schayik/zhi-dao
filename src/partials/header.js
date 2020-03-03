import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Header = ({ title, size = 'medium', fluid, CustomSideBar }) => {

  const ImageComponent = fluid ? Img : StandardHeaderImage

  return (
    <StyledHeader size={size}>
      <ImageComponent
        className="image"
        fluid={fluid}
        alt={title}
        style={{ position: 'absolute' }}
      />
      <div className='compress'>
        <div className='sidebar'>
          {CustomSideBar
            ? <CustomSideBar />
            : <h1 className='title'>{title}</h1>
          }
        </div>
      </div>
    </StyledHeader>
  )
}

const StandardHeaderImage = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "temple.png"}) {
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

  return <Img {...props} fluid={data.file.childImageSharp.fluid} />
}

const SIZES = {
  medium: {
    standard: '18.75rem',
    fullWidth: 'calc(200px + 8.5vw)',
  },
  large: {
    standard: '32rem',
    fullWidth: 'calc(400px + 8.5vw)',
  },
}

const StyledHeader = styled.header`
  height: ${p => SIZES[p.size].fullWidth};
  position: relative;

  @media (max-width: ${p => p.theme.media.max}px) {
    height: ${p => SIZES[p.size].standard};
  } 

  .image {
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  .compress {
    display: flex;
    justify-content: flex-end;
    height: 100%;

    @media (max-width: ${p => p.theme.media.large}px) {
      justify-content: center;
    } 

    .sidebar {
      width: ${p => p.theme.sidebar.width};
      background-color: ${p => p.theme.colors.whiteOverlay};

      padding: 2.5rem 2rem 0 2rem;

      display: flex;
      justify-content: center;

      h1.title {
        align-self: center;

        font-size: 1.5625rem;
        font-weight: 700;
        text-align: center;
      }
    }
  }

`

export default Header
