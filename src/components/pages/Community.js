import * as React from 'react';

import Card from "../general/card";
import { Pagination } from '@mui/material';
import { Container } from '@mui/material';
import  AddIcon from '@material-ui/icons/Add';
import Fab from '@mui/material/Fab';

export default function ResponsiveGrid() {
  return (
    <div>
      <Container maxWidth="md">
      <Fab size="medium" color="Green" aria-label="add" sx={{ ml: 100, mb: 5}}>
        <AddIcon />
      </Fab>
        <Card></Card>
      </Container>
      <Pagination sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      count={3} size="large" />
    </div>
  );
}
