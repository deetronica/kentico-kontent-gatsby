import { graphql } from "gatsby"
import React, { Component } from "react"
import parseHTML from 'html-react-parser';

import Richtext from "../richtext"

class Briefings extends Component {
  constructor(props) {
    super(props);

    this.linkedItem = this.props.linkedItem;
    this.heading = this.linkedItem.elements.headline__h1_.value
    this.content = this.linkedItem.elements.body_copy.resolvedData.html;
    this.images = this.linkedItem.elements.body_copy.images;
    this.links = this.linkedItem.elements.body_copy.links;
  }
  
  

  render(){

    return (
      <div class="briefing-container">
        <div>This is a briefing!!</div>
        <div>{this.heading}</div>
        <Richtext 
          content={this.content}
          linkedImages={this.images}
          linkedLinks={this.links}
        />
      </div>
    )
  }
}

export default Briefings

export const KontentItemBriefingsFragment = graphql`
  fragment KontentItemBriefingsFragment on KontentItemBriefings {
    system {
      codename
      type
    }
    elements {
      body_copy {
        value
        resolvedData {
          html
        }
        images {
          imageId
          description
          url
        }
        links {
          codename
          linkId
          type
          urlSlug
        }
      }
      briefing_image {
        value {
          url
          description
        }
      }
      briefing_name {
        value
      }
      headline__h1_ {
        value
      }
      short_desc_ {
        value
      }
      untitled_url_slug {
        value
      }
    }
  }
`;
