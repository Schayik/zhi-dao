import React from "react"

import Layout from "../partials/layout"
import Section from "../templates/section"
import Grid from "../templates/grid"
import News from "../templates/News"

import HomeSideBar from "../components/HomeSideBar"

import gridItems from "../data/home-informatie-grid-items"
import newsItems from "../data/news"

const IndexPage = props => (
  <Layout {...props} title="Home" CustomSideBar={HomeSideBar} >
    <Section 
      heading="Informatie"
    >
      <Grid items={gridItems} />
    </Section>
    {console.log(newsItems)}
    <Section 
      heading="News"
    >
      <News items={newsItems} />
    </Section>
  </Layout>
)

export default IndexPage
