import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import MainNav from "./MainNav";

const Header = props => (
  <header className="site-header">
    <div className="container">
      <div className="row">
        <h1>
          <Link to="/">
            <img src={props.logo} alt={props.siteTitle} />
          </Link>
        </h1>
        <MainNav></MainNav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
