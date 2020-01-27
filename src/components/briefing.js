import React from "react"

export default (props) => {
    return (
        <div class="listing-item">
            {
                props.image_url != null &&
                <div class="li-img">
                    <img src={props.image_url} alt={props.image_desc} />
                </div>
            }
            <div class="li-content">
                <h3 class="li-title">{props.name}</h3>
                <div class="li-desc">{props.short_desc}</div>
                <div>{props.url}</div>
            </div>
        </div>
    )
}