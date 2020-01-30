import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import KontentResolver from "../components/KontentResolver";

const Footer = props => (
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col">
          <KontentResolver content={props.footerContact} />
        </div>
        <div className="col">
          <KontentResolver content={props.footerCopyright} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
