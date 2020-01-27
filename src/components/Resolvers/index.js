import React from "react"
import BriefingResolver from "./BriefingResolver";
import SpeechesResolver from "./SpeechesResolver";

export default ({ data, domNode }) => {
    const node = data.allKontentItem.edges.find(edge => {
      return edge?.node?.system?.codename === domNode?.attribs?.['data-codename']
    })?.node

    switch (node?.system?.type) {
      case 'briefings':
        return <BriefingResolver node={node} />
      case 'speeches':
        return <SpeechesResolver node={node} />
      default:
        return null
    }
}