import React, { useState } from "react";
// var plant = [
//     {'name': 'apple', 'status': 'in progress', 'emission': 90, 'progress': 10},
//     {'name': 'banana', 'status': 'in progress', 'emission': 40, 'progress': 20},
//     {'name': 'grape', 'status': 'in progress', 'emission': 30, 'progress': 60},
//     {'name': 'strawberry', 'status': 'in progress', 'emission': 30, 'progress': 60},
//     {'name': 'melon', 'status': 'in progress', 'emission': 30, 'progress': 60},
//     {'name': 'blueberry', 'status': 'in progress', 'emission': 30, 'progress': 60}
//   ]

let raw_data = require('../../sample_data/sample.json')
var plantList = []
export const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

for (var key in raw_data){
  const curId = uid()
  const element = {
    'id': curId,
    'name': key,
    'status': 'in progress',
    'progress': Math.round(20/raw_data[key]['growth period'] * 100),
    'img_src': raw_data[key]['img'],
    'daily_task': raw_data[key]['daily task']
  }
  plantList.push(element)
}

// console.log(plantList)

const PlantListHook = () => {
    const [myPlants, setMyPlants] = useState([])
    return {myPlants, setMyPlants}
}

export default PlantListHook;