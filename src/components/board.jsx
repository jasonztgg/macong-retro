import React from 'react';
import { Container, Grid } from '@material-ui/core';

export default () => (
  <>
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          1
        </Grid>
        <Grid item xs={12} sm={4}>
          2
        </Grid>
        <Grid item xs={12} sm={4}>
          3
        </Grid>
      </Grid>
    </Container>
  </>
);
