import React from "react"
import { graphql } from "gatsby"
import KontentResolver from "../KontentResolver"

export default ({ node }) => {
  return (
    <>
      <h2>{node.elements.speech_name.value}</h2>
      <KontentResolver content={node.elements.full_body___transcript.value} />
    </>
  )
}

export const query = graphql`
  fragment SpeechesResolverQuery on KontentItem {
    ... on KontentItemSpeeches {
      elements {
        youtube_link {
          value
        }
        url {
          value
        }
        speech_name {
          value
        }
        speech_headline_h1 {
          value
        }
        full_body___transcript {
          value
        }
        by_line {
          value
        }
      }
    }
  }
`
