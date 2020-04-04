import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from "../components/section"
import Buttons from '../components/buttons'

import ContactLinks from '../custom/contact-links'
import ContactRoute from '../custom/contact-route'
import ContactAddress from '../custom/contact-address'

const Contact = ({ data, ...props }) => (
  <Layout {...props} title="Contact" >
    <Section>
      <ContactLinks />
      {/* <div style={{ flex: 1 }} /> */}
      <Buttons buttons={buttons} />
    </Section>
    <Section heading='Route'>
      <ContactRoute 
        fluid1={data.venray.childImageSharp.fluid} 
        fluid2={data.aanDeDril.childImageSharp.fluid}
      />
    </Section>
  </Layout>
)

export default Contact

// const Post = () => <p>Overdag heb ik vaak afspraken, dus na 17:00 uur ben ik het beste bereikbaar.</p>
// const Pre = () => <p>Zhi Dao<br />Aan de Dril 10<br />5801 HX Venray<br />kvk 12049965</p>

const mapsUrl = 'https://www.google.nl/maps/place/Zhi+Dao/@51.5247849,5.9516783,17z/data=!3m1!4b1!4m5!3m4!1s0x47c73fe42b62ba4d:0xefb5facdd4716abc!8m2!3d51.5247849!4d5.953867'

const buttons = [
  // { href: 'tel:0478-514313', label: '0478-514313', target: '_blank', as: 'a', Post: Post },
  // { href: 'mailto:info@zhidao.nl', label: 'info@zhidao.nl', as: 'a', target: '_blank' },
  { href: mapsUrl, label: 'Route', target: '_blank', as: 'a', Post: ContactAddress },
]

export const pageQuery = graphql`
  query {
    venray: file( relativePath: {eq: "venray.png"} ) {
      id
      childImageSharp {
        fluid ( maxWidth: 1200 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aanDeDril: file( relativePath: {eq: "aan-de-dril.png"} ) {
      id
      childImageSharp {
        fluid ( maxWidth: 1200 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
