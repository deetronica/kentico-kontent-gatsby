import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Article = ({ data }) => {
  const item = data.kontentItemArticle.elements
  return (
    <Layout>
      <SEO title={item.title.value} description={item.meta_description.value} />
      <h1>{item.title.value} TEST</h1>
      <div dangerouslySetInnerHTML={{ __html: item.body_copy.value }} />
    </Layout>
  )
}
export default Article
export const query = graphql`
  query articleQuery($slug: String!) {
    kontentItemArticle(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      elements {
        body_copy {
          value
        }
        title {
          value
        }
        meta_description {
            value
        }
      }
    }
  }
`