import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from '../components/markdown'
import Image from '../components/image'
import Grid from "../components/grid"
import News from "../components/klachten"

import HomeSideBar from '../custom/home-side-bar'

import Behandelmethoden from '../icons/behandelmethoden.js'
import Advies from '../icons/advies.js'
import Over from '../icons/over.js'
import Bedrijven from '../icons/bedrijven.js'

const items = [
  { 
    icon: Behandelmethoden, 
    bodyText: "Wil je informatie over acupunctuur, kruidengeneeskunde, T'ai Chi Chuan, Qi Gong of Quantumbiofeedback?",
    buttonText: "Behandelmethoden",
    buttonLink: "/behandelmethoden",
  },
  { 
    icon: Advies, 
    bodyText: "Wil je advies over voeding, levensstijladvies, familieopstellingen, coaching of bioenergetische begeleiding?",
    buttonText: "Coaching en begeleiding",
    buttonLink: "/coaching-en-begeleiding",
  },
  { 
    icon: Over, 
    bodyText: "Wil je weten met welke klachten Zhi Dao jou kan helpen of wat jouw zorgverzekering vergoed?",
    buttonText: "Voor patiënten",
    buttonLink: "/voor-patienten",
  },
  { 
    icon: Bedrijven,
    bodyText: "Is jouw bedrijf op zoek naar een projectleider, coach, adviseur of trainer?",
    buttonText: "Voor bedrijven",
    buttonLink: "/voor-bedrijven",
  },
]

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/markdown/home-page/"} ) {
      id
      html
      frontmatter {
        featuredImage {
          childImageSharp {
            fixed (width: 360, height: 270) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: frontmatter___title }
      filter: { fileAbsolutePath: { regex: "/markdown/klachten/" } }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
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
  <Layout {...props} CustomSideBar={HomeSideBar} headerSize='large'>
    <Section>
      <Markdown html={data.markdownRemark.html} />
      <Image isSquare isBottom fixed={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fixed} />
    </Section>
    <Section 
      heading="Informatie"
    >
      <Grid items={items} />
    </Section>
    <Section heading="Klachten" id="klachten">
      <News edges={data.allMarkdownRemark.edges} />
    </Section>
  </Layout>
)

export default IndexPage
