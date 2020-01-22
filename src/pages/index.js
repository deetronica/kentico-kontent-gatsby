import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  const itemEdges = data.allKontentItem.edges;
  const edges = itemEdges.map(({node}) => {
    if (node.elements) {
      return (
        <li key={node.id}>
          <Link to={node.elements.url.value}>
            {node.elements.page_name.value}
          </Link>
        </li>
      );
    }
  });

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <ul>{edges}</ul>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Grid example</Link>
    </Layout>
  );
}

export const query = graphql`
  query homepageContentQuery {
    allKontentItem {
      edges {
        node{
          ... on KontentItemOneColumnContent {
            id
            elements {
              page_name {
                value
              }
              url {
                value
              }
            }
          }
          ... on KontentItemTwoColumnContent {
            id
            elements {
              page_name {
                value
              }
              url {
                value
              }
            }
          }
          ... on KontentItemThreeColumnContent {
            id
            elements {
              page_name {
                value
              }
              url {
                value
              }
            }
          }
        }
      }
    }
  }
`