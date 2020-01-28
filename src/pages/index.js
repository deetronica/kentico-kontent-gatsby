import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/Seo";
import Item from "../components/Item";

export default ({ data }) => {
  const itemEdges = data.allSitePage.edges;
  const edges = itemEdges.map(({ node }) => {
    if (node?.context && node?.context?.id) {
      return (
        <Item
          key={node?.context?.id}
          title={node?.context?.name}
          type={node?.context?.type}
          desc={node?.context?.content}
          link={node?.context?.url}
        />
      );
    }
  });

  return (
    <Layout>
      <SEO title="Welcome to the American Swiss Foundation" />
      <h1>Hi people</h1>
      <ul className="listing">{edges}</ul>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great!</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Grid example</Link>
    </Layout>
  );
};

export const query = graphql`
  query homepageContentQuery {
    allSitePage {
      edges {
        node {
          context {
            content
            name
            type
            url
            id
          }
        }
      }
    }
  }
`;
