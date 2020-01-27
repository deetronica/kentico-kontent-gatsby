import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import KontentResolver from '../components/KontentResolver';

export default ({ data }) => {
  const item = data.kontentItem.elements;

  return (
    <Layout>
      <SEO title={item.page_name.value} />
      <h1>Page name: {item.page_name.value}</h1>
      <hr/>
      <p>Page name (h1): {item.page_heading__h1_.value}</p>
      <hr />
      <p>URL: /{item.url.value}</p>
      <hr />
      <p>Body copy:</p>
      <KontentResolver content={item.main_body_copy.value} />
    </Layout>
  );
}

export const query = graphql`
  query contentQuery($id: String!) {
    kontentItem(id: { eq: $id }) {
      ... on KontentItemOneColumnContent {
        elements {
          page_name {
            value
          }
          page_heading__h1_ {
            value
          }
          main_body_copy {
            value
            resolvedData {
              html
            }
            images {
              imageId
              description
              url
            }
            links {
              codename
              linkId
              type
              urlSlug
            }
            linked_items {
              ...LinkedItemsFragment
            }
          }
          url {
            value
          }
        }
      }
      ... on KontentItemTwoColumnContent {
        elements {
          page_name {
            value
          }
          page_heading__h1_ {
            value
          }
          main_body_copy {
            value
            resolvedData {
              html
            }
            images {
              imageId
              description
              url
            }
            links {
              codename
              linkId
              type
              urlSlug
            }
            linked_items {
              ...LinkedItemsFragment
            }
          }
          url {
            value
          }
        }
      }
      ... on KontentItemThreeColumnContent {
        elements {
          page_name {
            value
          }
          page_heading__h1_ {
            value
          }
          main_body_copy {
            value
            resolvedData {
              html
            }
            images {
              imageId
              description
              url
            }
            links {
              codename
              linkId
              type
              urlSlug
            }
            linked_items {
              ...LinkedItemsFragment
            }
          }
          url {
            value
          }
        }
      }
    }
  }
`