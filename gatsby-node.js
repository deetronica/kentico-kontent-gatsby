/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const _ = require(`lodash`);
const kontentItemTypeIdentifier = `KontentItem`;
const kontentColumnIndentifier = `OneColumnContent`;

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (_.has(node, `internal.type`) && _.isString(node.internal.type) && node.internal.type.startsWith(kontentItemTypeIdentifier)) {
    if (node.internal.type.includes('Column')) {
      createNodeField({
        node,
        name: `name`,
        value: node.elements.page_name.value
      });

      createNodeField({
        node,
        name: `slug`,
        value: node.elements.url.value
      });
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const resultContent = await graphql(`
    {
      allKontentItem {
        edges {
          node {
            id
            ... on KontentItemOneColumnContent {
              fields {
                name
                slug
              }
            }
            ... on KontentItemTwoColumnContent {
              fields {
                name
                slug
              }
            }
            ... on KontentItemThreeColumnContent {
              fields {
                name
                slug
              }
            }
          }
        }
      }
    }
  `)

  resultContent.data.allKontentItem.edges.forEach(({ node }) => {
    if (node.fields.name && node.fields.slug && node.id) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/content.js`),
        context: {
          slug: node.fields.slug,
          name: node.fields.name,
          id: node.id
        },
      })
    }
  })
}