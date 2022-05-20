import React from "react";
import OutlinedCard from "./OutlinedCard";

const PlantList = (props) => {
    
    const output = props.plants.map(element => {
        return(
            <OutlinedCard
                plant={element}
                setMyPlants={props.setMyPlants}
                myPlants={props.plants}
                dailyTask={props.dailyTask} setDailyTask={props.setDailyTask}
            ></OutlinedCard>
        )
    });
    return output
}

export default PlantList;