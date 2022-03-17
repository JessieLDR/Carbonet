import React from "react";
import { useNavigate } from "react-router-dom";

const PlantList = (props) => {
    const plantOutput = props.plants.map(item => (<div>{item}</div>))
    return ({plantOutput})
}

export default PlantList;