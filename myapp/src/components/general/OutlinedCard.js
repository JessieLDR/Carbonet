import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProgressBar } from 'react-bootstrap';
import { spacing } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';


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


  function deletePlant() {
    const curPlant = myPlants.filter(element => element.id != id)
    console.log(curPlant)
    setMyPlants(curPlant)
  }
  return (
  <React.Fragment>
    <Box sx={{ p: 2, border: '1px solid #83765F', borderBottom: 11, borderColor: '#7C8C64'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
            {status}
          </Typography>
          <Typography style={{ fontWeight: 600 }} sx={{ mb: 1.5 }} color="#7C8C64">
            {name}
          </Typography>
          <div>
           <ProgressBar variant="success" now={progress} label={`${progress}%`}></ProgressBar>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={deletePlant}>Delete Plant</Button>
        </CardActions>
    </Box>
  </React.Fragment>
)};

export default function OutlinedCard(props) {
  return (
      <Box sx={{ p: 2, maxHeight:300 }}>
          <Card variant="outlined">{card(props)}</Card>
      </Box>
  );
}
