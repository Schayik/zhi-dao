import React from "react"
import { graphql } from "gatsby"

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"

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

const Article = ({ data, ...props }) => (
  <Layout {...props}
    title={data.markdownRemark.frontmatter.title}
  >
    <Section>
      <Markdown markdownRemark={data.markdownRemark} />
    </Section>
  </Layout>
)

export default Article



