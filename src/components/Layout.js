import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";
import "../sass/main.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      kontentItemSiteSettings {
        elements {
          social_facebook {
            value
          }
          social_linkedin {
            value
          }
          social_twitter {
            value
          }
          logo {
            value {
              url
            }
          }
          footer_copyright {
            value
          }
          footer_contact {
            value
          }
        }
      }
    }
  `);

  const siteSettings = data.kontentItemSiteSettings.elements;
  const socialFacebook = siteSettings?.social_facebook?.value;
  const socialTwitter = siteSettings?.social_twitter?.value;
  const socialLinkedIn = siteSettings?.social_linkedIn?.value;

  return (
    <div className="site-container">
      <Header
        siteTitle={data.site.siteMetadata.title}
        logo={siteSettings?.logo?.value[0]?.url}
        socialFacebook={socialFacebook}
        socialTwitter={socialTwitter}
        socialLinkedIn={socialLinkedIn}
      />
      <main id="site-main" className="site-main">
        <div className="container">
          <div className="row">
            <div className="col">{children}</div>
          </div>
        </div>
      </main>
      <Footer
        footerContact={siteSettings?.footer_contact?.value}
        footerCopyright={siteSettings?.footer_copyright?.value}
        socialFacebook={socialFacebook}
        socialTwitter={socialTwitter}
        socialLinkedIn={socialLinkedIn}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
