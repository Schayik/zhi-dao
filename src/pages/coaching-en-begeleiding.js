import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"

const buttons = [
  { link: '/coaching-en-begeleiding#voedingsadvies', label: 'Voedingsadvies'},
  { link: '/coaching-en-begeleiding#levensstijladvies', label: 'Levensstijladvies'},
  { link: '/coaching-en-begeleiding#familieopstellingen', label: 'Familieopstellingen'},
  { link: '/coaching-en-begeleiding#coaching', label: 'Coaching'},
  { link: '/coaching-en-begeleiding#bioenergetische-begeleiding', label: 'Bioenergetische begeleiding'},
]

const Coaching = ({ data, ...props }) => (
  <Layout {...props} title="Behandelmethoden" >
    <Section>
      <Markdown html={data.intro.html} buttons={buttons}/>
    </Section>
    <Section heading='Voedingsadvies' id='voedingsadvies'>
      <Markdown 
        html={data.voedingsadvies.html} 
        fixed={data.voedingsadviesImage.childImageSharp.fixed}
        imageSide='left'
      />
    </Section>
    <Section heading='Levensstijladvies' id='levensstijladvies'>
      <Markdown 
        html={data.levensstijladvies.html} 
        fixed={data.voedingsadviesImage.childImageSharp.fixed}
        imageSide='right'
      />
    </Section>
    <Section heading='Familieopstellingen' id='familieopstellingen'>
      <Markdown 
        html={data.familieopstellingen.html} 
        fixed={data.voedingsadviesImage.childImageSharp.fixed}
        imageSide='left'
      />
    </Section>
    <Section heading='Coaching' id='coaching'>
      <Markdown 
        html={data.coaching.html} 
        fixed={data.voedingsadviesImage.childImageSharp.fixed}
        imageSide='right'
      />
    </Section>
    <Section heading='Bioenergetische begeleiding' id='bioenergetische-begeleiding'>
      <Markdown 
        html={data.bioenergetischeBegeleiding.html} 
        fixed={data.voedingsadviesImage.childImageSharp.fixed}
        imageSide='left'
      />
    </Section>
  </Layout>
)

export default Coaching

export const pageQuery = graphql`
  query {
    intro: markdownRemark (
      fileAbsolutePath: { regex: "/coaching-en-begeleiding/intro/" }
    ) {
      id
      html
    }
    levensstijladvies: markdownRemark (
      fileAbsolutePath: { regex: "/coaching-en-begeleiding/levensstijladvies/" }
    ) {
      id
      html
    }
    voedingsadvies: markdownRemark (
      fileAbsolutePath: { regex: "/coaching-en-begeleiding/voedingsadvies/" }
    ) {
      id
      html
    }
    voedingsadviesImage: file( relativePath: {eq: "header-image.jpg"} ) {
      id
      childImageSharp {
        fixed ( width: 360, height: 270 ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    familieopstellingen: markdownRemark (
      fileAbsolutePath: { regex: "/coaching-en-begeleiding/familieopstellingen/" }
    ) {
      id
      html
    }
    coaching: markdownRemark (
      fileAbsolutePath: { regex: "/coaching-en-begeleiding/coaching/" }
    ) {
      id
      html
    }
    bioenergetischeBegeleiding: markdownRemark (
      fileAbsolutePath: { regex: "/coaching-en-begeleiding/bioenergetische-begeleiding/" }
    ) {
      id
      html
    }
  }
`
