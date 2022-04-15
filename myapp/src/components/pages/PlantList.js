import React from "react";
import OutlinedCard from "../general/OutlinedCard";

const PlantList = (props) => {
    
    const output = props.plants.map(element => {
        return(
            <OutlinedCard
                plant={element}
                setMyPlants={props.setMyPlants}
                myPlants={props.plants}
            ></OutlinedCard>
        )
    });
    return output
}

export default PlantList;