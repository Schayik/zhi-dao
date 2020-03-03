import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"
import Buttons from '../components/buttons'
import Image from '../components/image'

import { slugify } from '../utils/helpers'

const Behandelmethoden = ({ data, ...props }) => {

  let intro = null
  let rest = []
  let buttons = []

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.title === 'intro') {
      intro = node
    } else {
      rest.push(node)
      buttons.push({ 
        to: `/behandelmethoden#${slugify(node.frontmatter.title)}`, 
        label: node.frontmatter.title,
      })
    }
  })

  return (
    <Layout {...props} title="Behandelmethoden" >
      <Section>
        <Markdown html={intro.html} />
        <Buttons buttons={buttons} />
      </Section>
      {rest.map((node, index) => (
        <Section heading={node.frontmatter.title} id={slugify(node.frontmatter.title)} key={slugify(node.frontmatter.title)}>
          {index % 2 === 0 && <Image fixed={node.frontmatter.featuredImage.childImageSharp.fixed} />}
          <Markdown html={node.html} />
          {index % 2 !== 0 && <Image fixed={node.frontmatter.featuredImage.childImageSharp.fixed} />}
        </Section>
      ))}
    </Layout>
  )
}

export default Behandelmethoden

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown/behandelmethoden/" } }
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

