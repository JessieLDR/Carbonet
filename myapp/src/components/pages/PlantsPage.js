import PlantList from "./PlantList"
import { useState } from "react"
import { Button } from "react-bootstrap"

var plant = [
    {'name': 'apple', 'status': 'in progress', 'emission': 90, 'progress': 10},
    {'name': 'banana', 'status': 'in progress', 'emission': 40, 'progress': 20},
    {'name': 'grape', 'status': 'in progress', 'emission': 30, 'progress': 60}
  ]

var plant2 = [
    {'name': 'grape', 'status': 'in progress', 'emission': 90, 'progress': 10},
    {'name': 'pumpkin', 'status': 'in progress', 'emission': 40, 'progress': 20},
    {'name': 'watermelon', 'status': 'in progress', 'emission': 30, 'progress': 60}
  ]
  
const PlantsPage = () => {
    const [myPlants, setMyPlants] = useState([])
    function updatePlantList(){
        setMyPlants(plant2)
        console.log(myPlants)
    }
    return(
        <div>
            <PlantList plants={myPlants} />
            <Button variant="primary" size="lg" onClick={updatePlantList}>Add a plant</Button>
        </div>
    )
}

export default PlantsPage