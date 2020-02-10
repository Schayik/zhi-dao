import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"
import Buttons from "../components/buttons"
import Image from "../components/image"

const buttons = [
  { to: '/coaching-en-begeleiding#voedingsadvies', label: 'Voedingsadvies'},
  { to: '/coaching-en-begeleiding#levensstijladvies', label: 'Levensstijladvies'},
  { to: '/coaching-en-begeleiding#familieopstellingen', label: 'Familieopstellingen'},
  { to: '/coaching-en-begeleiding#coaching', label: 'Coaching'},
  { to: '/coaching-en-begeleiding#bioenergetische-begeleiding', label: 'Bioenergetische begeleiding'},
]

const Coaching = ({ data, ...props }) => (
  <Layout {...props} title="Coaching en begeleiding" >
    <Section>
      <Markdown html={data.intro.html} />
      <Buttons buttons={buttons} />
    </Section>
    <Section heading='Voedingsadvies' id='voedingsadvies'>
      <Image fixed={data.voedingsadviesImage.childImageSharp.fixed} />
      <Markdown html={data.voedingsadvies.html} />
    </Section>
    <Section heading='Levensstijladvies' id='levensstijladvies'>
      <Markdown html={data.levensstijladvies.html} />
      <Image fixed={data.voedingsadviesImage.childImageSharp.fixed} side='right' />
    </Section>
    <Section heading='Familieopstellingen' id='familieopstellingen'>
      <Image fixed={data.voedingsadviesImage.childImageSharp.fixed} />
      <Markdown html={data.familieopstellingen.html} />
    </Section>
    <Section heading='Coaching' id='coaching'>
      <Markdown html={data.coaching.html} />
      <Image fixed={data.voedingsadviesImage.childImageSharp.fixed} side='right' />
    </Section>
    <Section heading='Bioenergetische begeleiding' id='bioenergetische-begeleiding'>
      <Image fixed={data.voedingsadviesImage.childImageSharp.fixed} />
      <Markdown html={data.bioenergetischeBegeleiding.html} />
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
