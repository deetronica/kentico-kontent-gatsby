import React, { Component } from "react"
import get from 'lodash/get';
import parseHTML from 'html-react-parser';

import { Link } from "gatsby"
import LinkedItem from './linked-items';

class Richtext extends Component {
  constructor(props) {
    super(props);

    this.linkedImages = this.props.linkedImages;
    this.linkedLinks = this.props.linkedLinks;
    this.linkedItems = this.props.linkedItems;
    this.html = this.props.content.replace(/(\n|\r)+/, '');
  }
  /** Check if DOM node is a Kentico Kontent inline asset. */
  isAsset(domNode) {
    return (
      domNode.name === 'figure' &&
      domNode.attribs &&
      domNode.attribs['data-asset-id']
    );
  }
  /** Check if DOM node is a Kentico Kontent inline link. */
  isLink(domNode) {
    return (
      domNode.name === 'a' && domNode.attribs && domNode.attribs['data-item-id']
    );
  }
  /** Check if DOM node is a Kentico Kontent inline content item. */
  isLinkedItem(domNode) {
    return (
      domNode.name === 'p' &&
      domNode.attribs &&
      domNode.attribs.type === 'application/kenticocloud'
    );
  }
  /** Get ID for Kentico Kontent inline asset from DOM node. */
  getAssetId(domNode) {
    return get(domNode, 'attribs["data-asset-id"]') || null;
  }
  getAsset(id, assets) {
    if(assets !== undefined) {
      return assets.find(asset => asset.imageId === id);
    } else {
      return undefined;
    }
  }
  /** Get code name for Kentico Kontent inline content item from DOM node. */
  getCodeName(domNode) {
    return get(domNode, 'attribs["data-codename"]') || null;
  }
  /** Get data for Kentico Kontent inline link. */
  getLink(id, links) {
    return links.find(link => link.linkId === id);
  }
  /** Get content for Kentico Kontent inline link from DOM node. */
  getLinkContent(domNode) {
    return get(domNode, 'children[0].data') || null;
  }
  /** Get data for Kentico Kontent inline content item. */
  getLinkedItem(codename, linkedItems) {
    return linkedItems.find(item => item.system.codename === codename);
  }
  /** Get ID for Kentico Kontent inline link from DOM node. */
  getLinkId(domNode) {
    return get(domNode, 'attribs["data-item-id"]') || null;
  }

  replaceNode(domNode, images, links, linkedItems) {
    // Replace inline assets.
    if (this.isAsset(domNode)) {
      const id = this.getAssetId(domNode);
      const image = this.getAsset(id, images);
      if(image !== undefined) {
        return <div><img src={image.url} alt={image.description} /></div>;
      }
    }
    // Replace inline links.
    if (this.isLink(domNode)) {
      const content = this.getLinkContent(domNode);
      const id = this.getLinkId(domNode);
      const link = this.getLink(id, links);
      return <Link to={link.urlSlug}>{content}</Link>;
    }
    // Replace inline linked items.
    if (this.isLinkedItem(domNode)) {
      const codename = this.getCodeName(domNode);
      const linkedItem = this.getLinkedItem(codename, linkedItems);
      return <LinkedItem linkedItem={linkedItem} />;
    }
  }
  render(){

      return parseHTML(this.html, {
        replace: domNode => this.replaceNode(domNode, this.linkedImages, this.linkedLinks, this.linkedItems),
      })

  }
}

export default Richtext
