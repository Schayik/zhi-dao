import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"
import Buttons from '../components/buttons'
import Image from '../components/image'

import { slugify } from '../utils/helpers'

const StandardPage = ({ data, pageContext, ...props }) => {

  const { title, slug } = pageContext

  let intro = null
  let rest = []
  let buttons = []

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.title === 'intro') {
      intro = node
    } else {
      rest.push(node)
      buttons.push({ 
        to: `/${slug}#${slugify(node.frontmatter.title)}`, 
        label: node.frontmatter.title,
      })
    }
  })

  return (
    <Layout {...props} title={title} >
      <Section>
        <Markdown html={intro.html} />
        <Buttons buttons={buttons} />
      </Section>
      {rest.map((node, index) => {
        const { title, featuredImage } = node.frontmatter
        const slug = slugify(title)

        return (
          <Section heading={title} id={slug} key={slug}>
            {featuredImage && index % 2 === 0 && <Image fixed={featuredImage.childImageSharp.fixed} />}
            <Markdown html={node.html} />
            {featuredImage && index % 2 !== 0 && <Image fixed={featuredImage.childImageSharp.fixed} />}
          </Section>
        )
      })}
    </Layout>
  )
}

export default StandardPage

export const pageQuery = graphql`
  query($regex: String!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $regex } }
      sort: { order: ASC, fields: [frontmatter___path] }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fixed (width: 360, height: 270) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`