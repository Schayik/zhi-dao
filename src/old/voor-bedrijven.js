import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"
import Buttons from '../components/buttons'
import Image from '../components/image'

import { slugify } from '../utils/helpers'

const Bedrijven = ({ data, ...props }) => {

  let intro = null
  let rest = []
  let buttons = []

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.title === 'intro') {
      intro = node
    } else {
      rest.push(node)
      buttons.push({ 
        to: `/voor-bedrijven#${slugify(node.frontmatter.title)}`, 
        label: node.frontmatter.title,
      })
    }
  })

  return (
    <Layout {...props} title="Voor Bedrijven" >
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

export default Bedrijven

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown/voor-bedrijven/" } }
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

