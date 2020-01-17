import { graphql } from "gatsby"
import React, { Component } from "react"
import parseHTML from 'html-react-parser';

class Briefings extends Component {
  constructor(props) {
    super(props);

    this.linkedItem = this.props.linkedItem;
    this.heading = this.linkedItem.elements.headline__h1_.value
    this.body = parseHTML(this.linkedItem.elements.body_copy.value)
  }
  
  

  render(){

    return (
      <div class="briefing-container">
        <div>This is a briefing!!</div>
        <div>{this.heading}</div>
        <div>{this.body}</div> 
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
