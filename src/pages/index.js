import React from "react"
import styled from "styled-components"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Grid from "../components/grid"
import News from "../components/News"

import gridItems from "../data/home-informatie-grid-items"

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/news/" } }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            day: date(formatString: "D")
            month: date(formatString: "MMM")
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data, ...props }) => (
  <Layout {...props} title="Home" CustomSideBar={HomeSideBar} >
    <Section 
      heading="Informatie"
    >
      <Grid items={gridItems} />
    </Section>
    <Section 
      heading="News"
    >
      <News edges={data.allMarkdownRemark.edges} />
    </Section>
  </Layout>
)

export default IndexPage

const HomeSideBar = () => (
  <StyledBar>
    <div>
      <h1>Zhi &bull; Dao</h1>
      <h2>[zhi dao]</h2>
    </div>
    <h3><strong>De man die met zijn vinger de goede weg wijst</strong> Traditioneel Chenese Geneeskunde en Advies</h3>
    <button>Afspraak Maken</button>
  </StyledBar>
)

const StyledBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1, h2, h3, button {
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

  button {
    background-color: ${p => p.theme.colors.red};
    height: 58px;
    align-self: stretch;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${p => p.theme.colors.white};
    font-size: 1.25rem;
    font-weight: 700;
  }
`
