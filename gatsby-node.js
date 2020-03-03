const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/article.js`)
  const standardPageTemplate = path.resolve(`src/templates/standard-page.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/markdown/news/" } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: articleTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  // Standard Pages
  const stardardPages = [
    { slug: 'behandelmethoden', title: 'Behandelmethoden' },
    { slug: 'coaching-en-begeleiding', title: 'Coaching en Begeleiding' },
    { slug: 'voor-bedrijven', title: 'Voor Bedrijven' },
  ]

  stardardPages.forEach(page => {
    createPage({
      path: page.slug,
      component: standardPageTemplate,
      context: {
        regex: `/markdown/${page.slug}/`,
        slug: page.slug,
        title: page.title,
      }, // additional data can be passed via context
    })
  })
}
