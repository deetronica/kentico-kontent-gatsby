import React from "react";
import Layout from "../components/Temp/Layout";
import SEO from "../components/Temp/Seo";
import KontentResolver from "../components/Temp/KontentResolver";

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
