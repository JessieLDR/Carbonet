import * as React from 'react';

import Card from "../general/card";
import { Pagination } from '@mui/material';
import { Container } from '@mui/material';

export default function ResponsiveGrid() {
  return (
    <div>
    <Container maxWidth="md">
      {/* <a href="/somewhere"><AddIcon /></a> */}
      <Card></Card>
    </Container>
    <Pagination sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    count={3} size="large" />
    </div>
  );
}
