import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Article = ({ data }) => {
  const item = data.kontentItemAboutUs.elements
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: item.url_pattern.value }} />
    </Layout>
  )
}
export default Article
export const query = graphql`
  query aboutusQuery($slug: String!) {
    kontentItemAboutUs(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      elements {
        url_pattern {
          value
        }
      }
    }
  }
`