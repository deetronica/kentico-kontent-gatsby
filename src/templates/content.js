import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const item = data.kontentItem.elements;

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
          }
          url {
            value
          }
        }
      }
    }
  }
`