import React from "react"
import { Link } from "gatsby"

const Banner = props => {
  return (
    <div className="banner-item">
      {props.image_url != null && (
        <div className="banner-img">
          <img src={props.image_url} alt={props.image_desc} />
        </div>
      )}
      <div className="banner-content">
        <h2 className="banner-title">{props.title}</h2>
        {props.summary && <div className="banner-desc">{props.summary}</div>}
        {props.button_url && (
          <Link to={props.button_url} aria-label={`Learn more about ${props.title}`}>
            {props.button_text ?? 'Learn More'}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Banner
