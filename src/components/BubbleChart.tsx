import React from 'react'
import Plot from 'react-plotly.js';

const BubbleChart = () => {
  return (
    <div>
      <Plot
            data={[
                {
                    x: [1, 2, 3, 4],
                    y: [10, 11, 12, 13],
                    text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
                    mode: 'markers',
                    marker: {
                      size: [400, 600, 800, 1000],
                      sizemode: 'area'
                    }
                  },
                  {
                    x: [1, 2, 3, 4],
                    y: [14, 15, 16, 17],
                    text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
                    mode: 'markers',
                    marker: {
                      size: [400, 600, 800, 1000],
                      //setting 'sizeref' to lower than 1 decreases the rendered size
                      sizeref: 2,
                      sizemode: 'area'
                    }
                  },
                  {
                    x: [1, 2, 3, 4],
                    y: [20, 21, 22, 23],
                    text: ['A</br>size: 40</br>sixeref: 2', 'B</br>size: 60</br>sixeref: 2', 'C</br>size: 80</br>sixeref: 2', 'D</br>size: 100</br>sixeref: 2'],
                    mode: 'markers',
                    marker: {
                      size: [400, 600, 800, 1000],
                      //setting 'sizeref' to less than 1, increases the rendered marker sizes
                      sizeref: 0.2,
                      sizemode: 'area'
                    }
                  },
                  {
                    x: [1, 2, 3, 4],
                    y: [26, 27, 28, 29],
                    text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
                    mode: 'markers',
                    marker: {
                      size: [400, 600, 800, 1000],
                      sizeref: 2.0 * Math.max(...[400, 600, 800, 1000]) / (40**2),
                      sizemode: 'area'
                    }
                  }
            ]}
            layout={{ title: 'Bubble Chart Size Scaling',showlegend: false, width: 500, height: 350 }}
            style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 2px', border:'1px solid lightgrey', borderRadius: '20px', display:'flex', alignItems:'center', justifyContent:'center' }}
          />
    </div>
  )
}

export default BubbleChart
