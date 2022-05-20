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
for (var key in raw_data){
  const element = {
    'name': key,
    'status': 'in progress',
    'progress': 0,
    'img_src': raw_data[key]['img'],
    'daily_task': raw_data[key]['daily task']
  }
  plantList.push(element)
}

const PlantOptionsHook = () => {
    const [myOptions, setMyOptions] = useState(plantList)
    return {myOptions, setMyOptions}
}

export default PlantOptionsHook