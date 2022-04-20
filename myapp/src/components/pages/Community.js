import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from "../general/card";
import { Pagination } from '@mui/material';
import { Container } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  let navigate = useNavigate();
  return (
    <div sx = {{maxHeight: 30}}>
    <Container maxWidth="md">
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
            {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={6} sm={6} md={6} key={index}>
                <Item 
                  onClick = {() => {
                    navigate("/communityPost")
                  }}
                ><Card></Card></Item>
            </Grid>
            ))}
        </Grid>
    </Box>
    </Container>
    <Pagination sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    count={10} size="large" />
    </div>
  );
}
