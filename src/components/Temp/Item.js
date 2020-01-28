import React from "react";
import { Link } from "gatsby";
import truncate from "truncate-html";

const Item = props => {
  return (
    <li className="listing-item">
      {props.image_url != null && (
        <div className="li-img">
          <img src={props.image_url} alt={props.image_desc} />
        </div>
      )}
      <div className="li-content">
        {props.type && <strong className="li-meta">{props.type}</strong>}
        <h3 className="li-title">{props.title}</h3>
        {props.desc && (
          <div
            className="li-desc"
            dangerouslySetInnerHTML={{
              __html: truncate(props.desc, 100, {
                byWords: true,
                excludes: ["img", "figure", "ul"],
              }),
            }}
          ></div>
        )}
        {props.link && (
          <Link to={props.link} aria-label={`Read more about ${props.title}`}>
            Read More
          </Link>
        )}
      </div>
    </li>
  );
};

export default Item;
