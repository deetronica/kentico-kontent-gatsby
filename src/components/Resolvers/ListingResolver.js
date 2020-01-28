import React from "react"
import { graphql } from "gatsby"
import Item from "../Item";

export default ({ data, node }) => {
  const name = node?.elements?.listing_type?.value?.[0]?.name
  const codename = node?.elements?.listing_type?.value?.[0]?.codename
  const count = node?.elements?.listing_count?.value ?? 10

  // Find all Kontent items that matches the codename type
  const items = data.allKontentItem.edges.filter(edge => {
    return edge?.node?.system?.type === codename
  })

  // If an error happened or no items found return message
  if (items?.length <= 0) return <div>No results found</div>

  // Create a list of React elements for each item
  const list = items.map(({ node }, index) => {
    let key, title, desc, url, image_url, image_desc

    // Get the correct data depending on the codename
    switch (codename) {
      case "briefings":
        title = node?.elements?.headline__h1_?.value
        desc = node?.elements?.short_desc_?.value
        url = node?.elements?.url?.value
        image_url = node?.elements?.briefing_image?.value?.[0]?.url
        key = node.id ?? index
        break
      default:
        return null
    }

    return <Item
      key={key}
      title={title}
      type={name}
      desc={desc}
      link={url}
      image_url={image_url}
    />
  })

  return (
    <ul className="listing">{list}</ul>
  )
}

export const query = graphql`
  fragment ListingResolverQuery on KontentItem {
    ... on KontentItemListing {
      elements {
        listing_type {
          value {
            codename
            name
          }
        }
        listing_count {
          value
        }
      }
    }
  }
`