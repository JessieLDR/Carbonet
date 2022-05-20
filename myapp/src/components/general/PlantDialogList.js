import React from "react";
import PlantDialogListItem from "./PlantDialogListItem";

const PlantDialogList = (props) => {
    var myPlants = props.myPlants
    var setMyPlants = props.setMyPlants
    var setMyOptions = props.setMyOptions
    var myOptions = props.myOptions
    var dailyTask = props.setDailyTask
    var setDailyTask = props.setDailyTask

    const output = myOptions.map(element => {
        return(
            <PlantDialogListItem name={element.name} myOptions={myOptions} myPlants={myPlants} setMyOptions={setMyOptions} setMyPlants={setMyPlants}
            dailyTask={dailyTask} setDailyTask={setDailyTask}/>
        )
    })
    return output;
}

export default PlantDialogList;