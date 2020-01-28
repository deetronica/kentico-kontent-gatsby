import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Grid examples</h1>
    <p>
      <Link to="/">Go back to the homepage</Link>
    </p>
    <div className="grid-example">
      <div className="row">
        <div className="col">One column content</div>
      </div>
      <div className="row">
        <div className="col-3">Two column rail content</div>
        <div className="col">Two column main content</div>
      </div>
      <div className="row">
        <div className="col-3">Three column rail content</div>
        <div className="col">Three column main content</div>
        <div className="col-3">Three column rail content</div>
      </div>
    </div>
  </Layout>
);

export default SecondPage;
