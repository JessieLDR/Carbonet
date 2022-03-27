import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProgressBar } from 'react-bootstrap';
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
  const name = props.name
  const status = props.status
  const emission = props.emission
  const progress = props.progress
  return (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {status}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {name}
      </Typography>
      <Typography variant="body2">
        CO2 emission: {emission}
      </Typography>
      <div>
       <ProgressBar now={progress} label={`${progress}%`}></ProgressBar>
      </div>
    </CardContent>
    <CardActions>
      <Button size="small">Additional actions</Button>
    </CardActions>
  </React.Fragment>
)};

export default function OutlinedCard(props) {
  return (
    <Box sx={{ maxWidth:300 }}>
      <Card variant="outlined">{card(props)}</Card>
    </Box>
  );
}