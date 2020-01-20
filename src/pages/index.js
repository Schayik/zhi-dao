import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Grid from "../components/grid"
import News from "../components/News"

import HomeSideBar from "../components/HomeSideBar"

import gridItems from "../data/home-informatie-grid-items"

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            day: date(formatString: "D")
            month: date(formatString: "MMM")
            path
            title
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
    {console.log(data.allMarkdownRemark.edges)}
    <Section 
      heading="News"
    >
      <News edges={data.allMarkdownRemark.edges} />
    </Section>
  </Layout>
)

export default IndexPage
