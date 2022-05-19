import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from "../general/card";
import { Pagination } from '@mui/material';
import { Container } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import PostHeading from "../images/PostHeading.png";

export default function ResponsiveGrid() {
  let navigate = useNavigate();
  return (
    <div>
    <img src='PostHeading'></img>
    <Container maxWidth="md">
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 3, sm: 4, md: 4 }}>
            <Grid item xs={5} sm={10} md={10}>
                <Card></Card>
            </Grid>
        </Grid>
    </Box>
    </Container>
    <Pagination sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    count={3} size="large" />
    </div>
  );
}
