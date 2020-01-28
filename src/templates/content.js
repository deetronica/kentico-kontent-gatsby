import React from "react";
import Layout from "../components/layout";
import SEO from "../components/Seo";
import KontentResolver from "../components/KontentResolver";

export default ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.name} />
      <h1>Page name: {pageContext.name}</h1>
      <hr />
      <p>URL: /{pageContext.url}</p>
      <hr />
      <p>Body copy:</p>
      <KontentResolver content={pageContext.content} />
    </Layout>
  );
};
