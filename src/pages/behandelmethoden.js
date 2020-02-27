import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"
import Buttons from '../components/buttons'
import Image from '../components/image'


const buttons = [
  { to: '/behandelmethoden#acupunctuur', label: 'Acupunctuur' },
  { to: '/behandelmethoden#moxatherapie-en-cupping', label: 'Moxatherapie en cupping' },
  { to: '/behandelmethoden#kruidengeneeskunde', label: 'Kruidengeneeskunde' },
  { to: '/behandelmethoden#tai-chi-chuan', label: "T'ai Chi Chuan" },
  { to: '/behandelmethoden#qi-gong', label: 'Qi Gong' },
  { to: '/behandelmethoden#quantumbiofeedback', label: 'Quantumbiofeedback' },
]

const Behandelmethoden = ({ data, ...props }) => (
  <Layout {...props} title="Behandelmethoden" >
    <Section>
      <Markdown html={data.intro.html} />
      <Buttons buttons={buttons} />
    </Section>
    <Section heading='Acupunctuur' id='acupunctuur'>
      <Image fixed={data.acupunctuurImage.childImageSharp.fixed} />
      <Markdown html={data.acupunctuur.html} />
    </Section>
    <Section heading='Moxatherapie en cupping' id='moxatherapie-en-cupping'>
      <Image fixed={data.acupunctuurImage.childImageSharp.fixed} />
      <Markdown html={data.moxatherapieEnCupping.html} />
    </Section>
    <Section heading='Kruidengeneeskunde' id='kruidengeneeskunde'>
      <Markdown html={data.kruidengeneeskunde.html} />
      <Image fixed={data.acupunctuurImage.childImageSharp.fixed} />
    </Section>
    <Section heading="T'ai Chi Chuan" id='tai-chi-chuan'>
      <Image fixed={data.acupunctuurImage.childImageSharp.fixed} />
      <Markdown html={data.taiChiChuan.html} />
    </Section>
    <Section heading='Qi Gong' id='qi-gong'>
      <Markdown html={data.qiGong.html} />
      <Image fixed={data.acupunctuurImage.childImageSharp.fixed} />
    </Section>
    <Section heading='Quantumbiofeedback' id='quantumbiofeedback'>
      <Image fixed={data.acupunctuurImage.childImageSharp.fixed} />
      <Markdown html={data.quantumbiofeedback.html} />
    </Section>
  </Layout>
)

export default Behandelmethoden

export const pageQuery = graphql`
  query {
    acupunctuurImage: file( relativePath: {eq: "header-image.jpg"} ) {
      id
      childImageSharp {
        fixed ( width: 360, height: 270 ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    intro: markdownRemark (
      fileAbsolutePath: { regex: "/behandelmethoden/intro/" }
    ) { id html }
    acupunctuur: markdownRemark (
      fileAbsolutePath: { regex: "/behandelmethoden/acupunctuur/" }
    ) { id html }
    moxatherapieEnCupping: markdownRemark (
      fileAbsolutePath: { regex: "/behandelmethoden/moxatherapie-en-cupping/" }
    ) { id html }
    kruidengeneeskunde: markdownRemark (
      fileAbsolutePath: { regex: "/behandelmethoden/kruidengeneeskunde/" }
    ) { id html }
    taiChiChuan: markdownRemark (
      fileAbsolutePath: { regex: "/behandelmethoden/tai-chi-chuan/" }
    ) { id html }
    qiGong: markdownRemark (
      fileAbsolutePath: { regex: "/behandelmethoden/qi-gong/" }
    ) { id html }
    quantumbiofeedback: markdownRemark (
      fileAbsolutePath: { regex: "/behandelmethoden/quantumbiofeedback/" }
    ) { id html }
  }
`

