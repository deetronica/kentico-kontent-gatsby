import React from "react"
import { graphql } from "gatsby"
import KontentResolver from "../KontentResolver"

export default ({ node }) => {
  return (
    <>
      <h2>{node.elements.briefing_name.value}</h2>
      <KontentResolver content={node.elements.body_copy.value} />
    </>
  )
}

export const query = graphql`
  fragment BriefingResolverQuery on KontentItem {
    ... on KontentItemBriefings {
      elements {
        untitled_url_slug {
          value
        }
        short_desc_ {
          value
        }
        headline__h1_ {
          value
        }
        briefing_name {
          value
        }
        briefing_image {
          value {
            url
          }
        }
        body_copy {
          value
        }
      }
    }
  }
`
