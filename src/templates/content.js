import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Richtext from "../components/richtext"

export default ({ data }) => {
  const item = data.kontentItem.elements;
  const content = item.main_body_copy.resolvedData.html;
  const images = item.main_body_copy.images;
  const links = item.main_body_copy.links;
  const contentItems = item.main_body_copy.linked_items;

  return (
    <Layout>
      <h1>Page name: {item.page_name.value}</h1>
      <hr/>
      <p>Page name (h1): {item.page_heading__h1_.value}</p>
      <hr />
      <p>URL: {item.url.value}</p>
      <hr />
      <p>Body copy:</p>
      <div dangerouslySetInnerHTML={{ __html: item.main_body_copy.value }} />
      <Richtext 
        content={content}
        linkedImages={images}
        linkedLinks={links}
        linkedItems={contentItems}
      />
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