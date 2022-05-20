import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PlantDialogList from './PlantDialogList';
import { Box } from '@mui/system';

export default function PlantDialog(props) {
  const myOptions = props.myOptions
  const setMyOptions = props.setMyOptions
  const myPlants = props.myPlants
  const setMyPlants = props.setMyPlants
  const dailyTask = props.dailyTask
  const setDailyTask = props.setDailyTask
  
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Box>
      <Button variant="contained" color="success" size="large" onClick={handleClickOpen('paper')} sx={{ ml: 100}}>Add plant</Button>
      <Dialog 
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Add a plant</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <PlantDialogList myOptions={myOptions} myPlants={myPlants} setMyOptions={setMyOptions} setMyPlants={setMyPlants}
          dailyTask={dailyTask} setDailyTask={setDailyTask}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}