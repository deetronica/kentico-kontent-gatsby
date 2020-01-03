/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === `KontentItemArticle`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.elements.url_pattern.value,
    })
  }
  if (node.internal.type === `KontentItemAboutUs`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.elements.url_pattern.value,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query data from Kentico
  const resultArticle = await graphql(`
    {
      allKontentItemArticle {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const resultAbout = await graphql(`
    {
      allKontentItemAboutUs {
        edges {
            node {
            fields {
                slug
            }
            }
        }
      }
    }
  `)
  // Create pages
  resultArticle.data.allKontentItemArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/article.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  resultAbout.data.allKontentItemAboutUs.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/about.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}