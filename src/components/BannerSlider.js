import React from "react"
import A11YSlider from 'a11y-slider';
import Banner from "./Banner"

export default class BannerSlider extends React.Component {
  constructor(props) {
    super(props);

    this.banners = this.props.banners
  }

  componentDidMount() {
    this.slider1 = new A11YSlider(this.example1);
  }
  componentWillUnmount() {
    this.slider1.destroy();
  }

  render() {
    const bannerListing = this.banners.edges.map(({ node }) => {
      if (node.elements && node.id) {
        return (
          <li key={node.id}>
            <Banner
              title={
                node.elements.heading?.value ??
                "Untitled"
              }
              summary={node.elements.summary?.value}
              button_text={node.elements.button_text?.value}
              button_url={node.elements.button_url?.value}
              image_url={node.elements.image?.value[0]?.url}
              image_desc={node.elements.image?.value[0]?.description}
            />
          </li>
        )
      }
    });
    return (
      <ul className="slider example1" ref={el => this.example1 = el}>
        {bannerListing}
      </ul>
    )
  }
}

