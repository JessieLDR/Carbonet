import React from "react";
import { useNavigate } from "react-router-dom";

const PlantList = (props) => {
    const output = props.plants.map(element => {
        return(
            <div>{element.name}</div>
        )
    });
    return output
}

export default PlantList;