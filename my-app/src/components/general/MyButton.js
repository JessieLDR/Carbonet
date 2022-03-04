import React from "react";

const MyButton = (props) =>{
    const name = props.name
    const container_name = props.name + '_button_container'

    return(
        <div className={container_name}>
            <button>{name}</button>
        </div>
    )
}

export default MyButton