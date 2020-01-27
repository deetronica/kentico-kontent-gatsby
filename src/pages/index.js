import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Briefing from "../components/briefing"

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

  const homeBriefings = data?.allKontentItemBriefings?.edges.map(({node}) => {
    if (node.elements) {
      return (
          <Briefing 
            name={node?.elements?.briefing_name?.value} 
            short_desc={node?.elements?.short_desc_?.value} 
            url={node?.elements?.untitled_url_slug?.value}
            image_url={node?.elements?.briefing_image?.value[0]?.url}
            image_desc={node?.elements?.briefing_image?.value[0]?.description}
            >
          </Briefing>
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
      {homeBriefings}
      <Link to="/page-2/">Grid example</Link>
    </Layout>
  );
}

export const query = graphql`
  query homepageContentQuery {
    allKontentItemBriefings(limit: 3) {
      edges {
        node{
          ...KontentItemBriefingsFragment
        }
      }
    }
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