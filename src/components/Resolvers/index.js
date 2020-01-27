import React from "react"
import BriefingResolver from "./BriefingResolver";

export default ({ data, domNode }) => {
    const node = data.allKontentItem.edges.find(edge => {
      return edge?.node?.system?.codename === domNode?.attribs?.['data-codename']
    })?.node

    switch (node.system.type) {
      case 'briefings':
        return <BriefingResolver node={node} />
      default:
        return null
    }
}