import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { uid } from '../hooks/PlantListHook';

export default function PlantDialogListItem(props) {
  var myPlants = props.myPlants
  var setMyPlants = props.setMyPlants
  var setMyOptions = props.setMyOptions
  var myOptions = props.myOptions
  const name = props.name;
  const plant = myOptions.find(element => element.name == name)
  var dailyTask = props.dailyTask
  var setDailyTask = props.setDailyTask

  function update() {
    const target = myOptions.find(element => element.name == name)
    const uniqueId = uid()
    console.log(target['img'])
    const newPlant = {
      'id': uniqueId,
      'name': name,
      'status': 'in progress',
      'progress': target['progress'],
      'img_src': target['img_src']
    }
    setMyPlants(myPlants => [...myPlants, newPlant]);
    var include = false
    myPlants.forEach(element => {
      if (element.name == name){
        include = true
        return
      }
    });
    if (!include){
      const tasks_raw = target['daily_task']
        tasks_raw.forEach(element => {
            const task_first = element['name']
            const task_second = element['desc']
            const task_full = name + ": " + task_first + " " + task_second
            setDailyTask(dailyTask => [...dailyTask, task_full])
        });
    }
  }
  return (
    <Card sx={{maxWidth: 320, maxHeight: 200, mt: 1}}>
      <CardMedia
        component="img"
        alt={name}
        height="50"
        image={plant['img_src']}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={update}>Add to list</Button>
      </CardActions>
    </Card>
  );
}