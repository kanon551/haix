import React, { useEffect, useState } from 'react';
import CommonPlot from '../global/CommonPlot';

const BubbleChart = () => {

  const [data, setData] = useState<any>([]);
  const [layout, setLayout] = useState<object>({});

  const trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
    mode: 'markers',
    marker: {
      size: [400, 600, 800, 1000],
      sizemode: 'area'
    }
  };

  const trace2 = {
    x: [1, 2, 3, 4],
    y: [14, 15, 16, 17],
    text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
    mode: 'markers',
    marker: {
      size: [400, 600, 800, 1000],
      sizeref: 2,
      sizemode: 'area'
    }
  };

  const trace3 = {
    x: [1, 2, 3, 4],
    y: [20, 21, 22, 23],
    text: ['A</br>size: 40</br>sixeref: 2', 'B</br>size: 60</br>sixeref: 2', 'C</br>size: 80</br>sixeref: 2', 'D</br>size: 100</br>sixeref: 2'],
    mode: 'markers',
    marker: {
      size: [400, 600, 800, 1000],
      sizeref: 0.2,
      sizemode: 'area'
    }
  };

  const trace4 = {
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

  const layoutObject = { title: 'Bubble Chart Size Scaling',showlegend: false, width: 500, height: 350 }


  useEffect(()=> {
    setData([trace1, trace2, trace3, trace4])
    setLayout(layoutObject)
  },[])


  return (
    <div>
          <CommonPlot data={data} layout={layout}/>
    </div>
  )
}

export default BubbleChart
