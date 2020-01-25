import React from "react"
import { graphql, Link } from "gatsby"

export default ({ data, domNode }) => {
  const linkNode = data.allKontentItem.edges.find(edge => {
    return edge?.node?.system?.id === domNode?.attribs?.["data-item-id"]
  })?.node

  return (
    <Link to={linkNode?.elements?.url?.value ?? '/somethingwentwrong'} {...domNode?.attribs}>
      {domNode?.children?.[0]?.data}
    </Link>
  )
}

export const query = graphql`
  fragment LinkResolverQuery on KontentItem {
    ... on KontentItemOneColumnContent {
      elements {
        url {
          value
        }
      }
    }
    ... on KontentItemTwoColumnContent {
      elements {
        url {
          value
        }
      }
    }
    ... on KontentItemThreeColumnContent {
      elements {
        url {
          value
        }
      }
    }
  }
`
