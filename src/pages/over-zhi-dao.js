import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"
import Buttons from "../components/buttons"

const buttons = [
  { to: '/contact', label: 'Contact'},
]

const Coaching = ({ data, ...props }) => (
  <Layout {...props} title="Over Zhi Dao" >
    <Section>
      <Markdown html={data.markdownRemark.html} />
      <Buttons buttons={buttons} />
    </Section>
  </Layout>
)

export default Coaching

export const pageQuery = graphql`
  query {
    markdownRemark (
      fileAbsolutePath: { regex: "/over-zhi-dao/" }
    ) {
      id
      html
    }
  }
`
