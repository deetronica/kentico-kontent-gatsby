import React, { Component } from "react"

import Briefings from './briefings';

class Listing extends Component {
  constructor(props) {
    super(props);

    this.linkedItem = this.props.linkedItem;
  }

  render(){
    
    switch (this.linkedItem.elements.listing_type.value[0].codename) {
      case 'briefings':
        return <div>test</div>
    
      default:
        return null;
    }

  }
}

export default Listing

export const KontentItemListingFragment = graphql`
  fragment KontentItemListingFragment on KontentItemListing {
    system {
      codename
      type
    }
    elements {
      listing_type {
        value {
          name
          codename
        }
      }
      listing_count {
        value
      }
    }
  }
`;
export const query = graphql`
  query ListingsQueries {
    allKontentItem {
      edges {
        node{
          ... on KontentItemBriefings {
            system {
              codename
            }
          }
        }
      }
    }
  }
`