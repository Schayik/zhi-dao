import React from "react"
import { graphql } from "gatsby"

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"
import Buttons from "../components/buttons"

const buttons = [
  { to: '/#nieuws', label: 'Alle Nieuwsberichten'},
]

const Article = ({ data, ...props }) => {

  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout {...props}
      title={frontmatter.title}
      headerImageFluid={frontmatter.featuredImage.childImageSharp.fluid}
      headerHeight={'31.25rem'}
    >
      <Section>
        <Markdown html={html} />
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
        date(formatString: "MMMM DD, YYYY")
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
  }
`



