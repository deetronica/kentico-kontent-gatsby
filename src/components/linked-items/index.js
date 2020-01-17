import React, { Component } from "react"

import Briefings from './briefings';

class LinkedItem extends Component {
  constructor(props) {
    super(props);

    this.linkedItem = this.props.linkedItem;
  }
  
  render(){

    switch (this.linkedItem.system.type) {
      case 'briefings':
        return <Briefings linkedItem={this.linkedItem} />
    
      default:
        return null;
    }

  }
}

export default LinkedItem

export const LinkedItemsFragment = graphql`
  fragment LinkedItemsFragment on Node {
    ... on KontentItemBriefings {
      ...KontentItemBriefingsFragment
    }
  }
`;
