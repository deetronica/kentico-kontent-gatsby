import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

const MainNav = () => {
  const data = useStaticQuery(graphql`
    query {
      kontentItemMainNavigation {
        elements {
          navigation_items {
            linked_items {
              ... on KontentItemNavigationItem {
                id
                elements {
                  url {
                    value
                  }
                  title {
                    value
                  }
                  subitems {
                    linked_items {
                      ... on KontentItemNavigationItem {
                        id
                        elements {
                          url {
                            value
                          }
                          title {
                            value
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const navItems =
    data.kontentItemMainNavigation.elements.navigation_items.linked_items;

  function getLink(link) {
    return (
      <Link to={link.elements.url.value}>{link.elements.title.value}</Link>
    );
  }

  const navHolder = navItems.map(link => {
    if (link.elements) {
      return (
        <li key={link.id}>
          {getLink(link)}
          {link.elements.subitems != null && (
            <ul>
              {link.elements.subitems.linked_items.map(link => {
                return <li key={link.id}>{getLink(link)}</li>;
              })}
            </ul>
          )}
        </li>
      );
    }
  });
  return <ul>{navHolder}</ul>;
};

export default MainNav;
