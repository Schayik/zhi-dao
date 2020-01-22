import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"

const buttons = [
  { link: '/voor-bedrijven#diensten', label: 'Diensten'},
  { link: '/voor-bedrijven#opdrachtgevers', label: 'Opdrachtgevers'},
  { link: '/voor-bedrijven#projecten', label: 'Projecten'},
  { link: '/voor-bedrijven#publicaties', label: 'Publicaties'},
  { link: '/voor-bedrijven#trainingen', label: 'Trainingen'},
  { link: '/voor-bedrijven#portfolio', label: 'Portfolio'},
  { link: '/voor-bedrijven#Training', label: 'Training'},
]

const Coaching = ({ data, ...props }) => (
  <Layout {...props} title="Voor bedrijven" >
    <Section>
      <Markdown html={data.intro.html} buttons={buttons}/>
    </Section>
    <Section heading='Diensten' id='diensten'>
      <Markdown html={data.diensten.html} />
    </Section>
    <Section heading='Opdrachtgevers' id='opdrachtgevers'>
      <Markdown html={data.opdrachtgevers.html} />
    </Section>
    <Section heading='Projecten' id='projecten'>
      <Markdown html={data.projecten.html} />
    </Section>
    <Section heading='Publicaties' id='publicaties'>
      <Markdown html={data.publicaties.html} />
    </Section>
    <Section heading='Trainingen' id='trainingen'>
      <Markdown html={data.trainingen.html} />
    </Section>
    <Section heading='Portfolio' id='portfolio'>
      <Markdown html={data.portfolio.html} />
    </Section>
    <Section heading='Training' id='training'>
      <Markdown html={data.training.html} />
    </Section>
  </Layout>
)

export default Coaching

export const pageQuery = graphql`
  query {
    intro: markdownRemark (
      fileAbsolutePath: { regex: "/voor-bedrijven/intro/" }
    ) {
      id
      html
    }
    diensten: markdownRemark (
      fileAbsolutePath: { regex: "/voor-bedrijven/diensten/" }
    ) {
      id
      html
    }
    opdrachtgevers: markdownRemark (
      fileAbsolutePath: { regex: "/voor-bedrijven/opdrachtgevers/" }
    ) {
      id
      html
    }
    projecten: markdownRemark (
      fileAbsolutePath: { regex: "/voor-bedrijven/projecten/" }
    ) {
      id
      html
    }
    publicaties: markdownRemark (
      fileAbsolutePath: { regex: "/voor-bedrijven/publicaties/" }
    ) {
      id
      html
    }
    trainingen: markdownRemark (
      fileAbsolutePath: { regex: "/voor-bedrijven/trainingen/" }
    ) {
      id
      html
    }
    portfolio: markdownRemark (
      fileAbsolutePath: { regex: "/voor-bedrijven/portfolio/" }
    ) {
      id
      html
    }
    training: markdownRemark (
      fileAbsolutePath: { regex: "/voor-bedrijven/training/" }
    ) { id html }
  }
`
