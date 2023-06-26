import React from 'react'
import Plot from 'react-plotly.js';


interface CommonPlotProps {
    data: any;
    layout: any;
}

const CommonPlot = ({data, layout}: CommonPlotProps) => {
  return (
      <Plot
      data={data}
      layout={layout}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 2px', border:'1px solid lightgrey', borderRadius: '20px', display:'flex', alignItems:'center', justifyContent:'center' }}
      />
  )
}

export default CommonPlot
