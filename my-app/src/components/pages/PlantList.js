import React from "react";
import OutlinedCard from "../general/OutlinedCard";

const PlantList = (props) => {
    const output = props.plants.map(element => {
        return(
            <OutlinedCard 
                name={element.name}
                status={element.status}
                emission={element.emission}
                progress={element.progress}
            ></OutlinedCard>
        )
    });
    return output
}

export default PlantList;