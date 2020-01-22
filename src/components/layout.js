/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../sass/main.scss"

const Layout = ({ children }) => (
  <StaticQuery
  query={graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={(data) => (
    <div className="site-container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main id="site-main">
        <div className="container">
          <div className="row">
            <div className="col">{children}</div>
          </div>
        </div>
      </main>
    </div>
  )}/>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
