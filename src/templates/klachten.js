import React from "react"
import { graphql } from "gatsby"

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"
import Buttons from "../components/buttons"

const buttons = [
  { to: '/#klachten', label: 'Alle Klachten'},
]

const Article = ({ data, ...props }) => {

  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout {...props}
      title={frontmatter.title}
      headerImageFluid={frontmatter.featuredImage.childImageSharp.fluid}
      headerSize='large'
    >
      <Section>
        <Markdown html={html + data.standaard.html} />
        <Buttons buttons={buttons} />
      </Section>
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    standaard: markdownRemark(fileAbsolutePath: {regex: "/standaard/"}) {
      html
    }
  }
`



