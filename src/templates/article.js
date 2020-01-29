import React from "react"
import { graphql } from "gatsby"

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"
import Buttons from "../components/buttons"

const buttons = [
  { to: '/#nieuws', label: 'Alle Nieuwsberichten'},
]

const Article = ({ data, ...props }) => (
  <Layout {...props}
    title={data.markdownRemark.frontmatter.title}
    headerHeight={'31.25rem'}
  >
    <Section>
      <Markdown html={data.markdownRemark.html} />
      <Buttons buttons={buttons} />
    </Section>
  </Layout>
)

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
            fluid( maxWidth: 648) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`



