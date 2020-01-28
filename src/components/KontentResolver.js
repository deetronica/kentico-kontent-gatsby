import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import parse from "html-react-parser"
import Resolvers from "./Resolvers"
import LinkResolver from "./Resolvers/LinkResolver"
import AssetResolver from "./Resolvers/AssetResolver"

class KontentResolver extends Component {
  constructor(props) {
    super(props)

    this.content = this.props.content
    this.data = this.props.data
  }

  /** Check if DOM node is a Kentico Kontent inline content item. */
  isLinkedItem(domNode) {
    return (
      domNode?.name === "object" &&
      domNode?.attribs?.type === "application/kenticocloud"
    )
  }

  /** Check if DOM node is a Kentico Kontent inline link. */
  isLink(domNode) {
    return domNode?.name === "a" && domNode?.attribs?.["data-item-id"]
  }

  /** Check if DOM node is a Kentico Kontent inline asset. */
  isAsset(domNode) {
    return domNode?.name === "figure" && domNode?.attribs?.["data-asset-id"]
  }

  replaceNode(domNode) {
    // Replace inline linked items.
    if (this.isLinkedItem(domNode)) {
      return <Resolvers data={this.data} domNode={domNode} />
    }

    // Replace inline links.
    if (this.isLink(domNode)) {
      return <LinkResolver data={this.data} domNode={domNode} />
    }

    // Replace inline assets.
    if (this.isAsset(domNode)) {
      return <AssetResolver domNode={domNode} />
    }
  }

  render() {
    return parse(this.content, {
      replace: domNode => this.replaceNode(domNode),
    })
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allKontentItem {
          edges {
            node {
              ...LinkResolverQuery
              ...BriefingResolverQuery
              ...SpeechesResolverQuery
              ...ListingResolverQuery
              system {
                id
                codename
                type
              }
            }
          }
        }
      }
    `}
    render={data => <KontentResolver data={data} {...props} />}
  />
)
