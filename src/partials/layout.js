/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Head from "./head"
import NavBar from "./navbar"
import Header from "./header"
import Footer from "./footer"

import GlobalStyle from '../styles/global'
import THEME from '../styles/theme'
// import "../styles/gatsby.css"

const Layout = ({ children, title, CustomSideBar, location, headerHeight, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(location)
  console.log(props)

  return (
    <>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Head title={title} />
        <NavBar siteTitle={data.site.siteMetadata.title} pathname={location && location.pathname} />
        <Header title={title} CustomSideBar={CustomSideBar} height={headerHeight} />
        <main>{children}</main>
        <Footer pathname={location && location.pathname} />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
