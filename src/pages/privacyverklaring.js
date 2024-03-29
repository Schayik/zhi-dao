import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from "../components/markdown"
import Buttons from "../components/buttons"

const buttons = [
  { to: '/contact', label: 'Contact'},
]

export const pageQuery = graphql`
  query {
    markdownRemark (
      fileAbsolutePath: { regex: "/privacyverklaring/" }
    ) {
      id
      html
    }
  }
`

const Privacy = ({ data, ...props }) => (
  <Layout {...props} title="Privacyverklaring" >
    <Section>
      <Markdown html={data.markdownRemark.html} />
      <Buttons buttons={buttons} />
    </Section>
  </Layout>
)

export default Privacy