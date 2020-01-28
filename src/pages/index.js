import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BannerSlider from "../components/BannerSlider"
import Item from "../components/Item"

export default ({ data }) => {
  console.log(data)

  const banners = data.allKontentItemBanner;

  const briefingListing = data.allKontentItem.edges.map(({ node }) => {
    if (node.elements && node.id) {
      return (
        <Item
          key={node.id}
          title={
            node.elements.page_name?.value ??
            node.elements.briefing_name?.value ??
            "Untitled"
          }
          type={node.system?.type}
          desc={node.elements.short_desc_?.value}
          link={node.elements.url?.value}
        />
      )
    }
  });

  return (
    <Layout>
      <SEO title="Welcome to the American Swiss Foundation" />
      <BannerSlider banners={banners} />
      <h1>Hi people</h1>
      <ul className="listing">{briefingListing}</ul>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Grid example</Link>
    </Layout>
  )
}

export const query = graphql`
  query homepageContentQuery {
    allKontentItemBanner {
      edges {
        node {
          id
          elements {
            button_text {
              value
            }
            button_url {
              value
            }
            heading {
              value
            }
            image {
              value {
                description
                url
              }
            }
            is_featured {
              value {
                codename
              }
            }
            summary {
              value
            }
          }
        }
      }
    }
    allKontentItem {
      edges {
        node {
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
          ... on KontentItemBriefings {
            id
            elements {
              main_body_copy {
                value
              }
              briefing_name {
                value
              }
              short_desc_ {
                value
              }
              url {
                value
              }
            }
            system {
              type
            }
          }
        }
      }
    }
  }
`
