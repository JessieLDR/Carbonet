import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardMedia } from '@mui/material';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (props) => {
  const name = props.plant.name
  const status = props.plant.status
  const progress = props.plant.progress
  const id = props.plant.id
  const myPlants = props.myPlants
  const setMyPlants = props.setMyPlants
  const dailyTask = props.dailyTask
  const setDailyTask = props.setDailyTask
  const image = props.plant['img_src']

  function deletePlant() {
    const curPlant = myPlants.filter(element => element.id != id)
    const delete_plant = myPlants.filter(element => element.id == id)[0]['name']
    var include = false
    curPlant.forEach(element => {
      if (element.name == delete_plant){
        include = true
        return
      }
    });
    if (!include) {
      const curTask = dailyTask.filter(element => {
        if (!element.includes(delete_plant)){
          return element
        }
      })
      setDailyTask(curTask)
    }
    console.log(curPlant)
    setMyPlants(curPlant)
  }
  return (
  <React.Fragment>
    <CardMedia
        component="img"
        alt={name}
        height="75"
        image={image}
      />
    <Box sx={{ p: 2, border: '1px solid #83765F', borderBottom: 11, borderColor: '#7C8C64'}}>
        <CardContent>
          <Typography style={{ fontWeight: 600 }} sx={{ mb: 1.5 }} color="#7C8C64">
            {name}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography
            fontFamily='Roboto'
            fontSize={12}
            style={{color:'#7C8C64'}} gutterBottom>
              {Math.round(30 * (1 - progress/100))} days until blossom
            </Typography>
            <Typography
            fontFamily='Roboto'
            fontSize={12}
            style={{color:'#7C8C64'}} gutterBottom>
              Total CO2 absorbed: {0.005 * progress}g
            </Typography>
          </Box>
          <div>
           <ProgressBar variant="success" now={progress} label={`${progress}%`}></ProgressBar>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="success" size="small" onClick={deletePlant} >Delete</Button>
        </CardActions>
    </Box>
  </React.Fragment>
)};

export default function OutlinedCard(props) {
  return (
      <Box sx={{ p: 2, maxHeight:325 }}>
          <Card >{card(props)}</Card>
      </Box>
  );
}
