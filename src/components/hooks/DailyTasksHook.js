import React,{ useState } from "react";

const raw_data = require('../../sample_data/sample.json')

const process_data = () => {
    const dailyTaskList = []
    for (var key in raw_data){
        const tasks_raw = raw_data[key]['daily task']
        const tasks = []
        tasks_raw.forEach(element => {
            const task_first = element['name']
            const task_second = element['desc']
            const task_full = key + ": " + task_first + " " + task_second
            dailyTaskList.push(task_full)
        });
    }
    return dailyTaskList
}

const processed_data = process_data()
const DailyTaskHook = () =>{
    const [dailyTask, setDailyTask] = useState([])
    return {dailyTask, setDailyTask}
}

export default DailyTaskHook
