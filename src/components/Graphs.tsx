import React from 'react';
import logo from './logo.svg';
import Plot from 'react-plotly.js';
import Grid from '@mui/material/Grid';
import BubbleChart from './BubbleChart';
import BubbleMap from './BubbleMap';
import ThreeDScatter from './ThreeDScatter';
import TreeMap from './TreeMap';

function Graphs() {
  
  return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <BubbleMap/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <BubbleChart/>
          </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <ThreeDScatter/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
       <TreeMap/>
        </Grid>
      </Grid>
  );
}

export default Graphs;