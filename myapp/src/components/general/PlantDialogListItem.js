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

  function update() {
    const target = myOptions.find(element => element.name == name)
    const uniqueId = uid()
    const newPlant = {
      'id': uniqueId,
      'name': name,
      'status': 'in progress',
      'progress': target['progress'],
      'img_src': target['img']
    }
    setMyPlants(myPlants => [...myPlants, newPlant]);
    console.log(myPlants)
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