import React from "react";

const Link = (props) => {
    const text = props.text
    const link = props.link

    return(
        <div>
            <a href={link}>{text}</a>
        </div>
    )
}

export default Link;