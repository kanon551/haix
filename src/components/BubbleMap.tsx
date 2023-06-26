import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import Plot from 'react-plotly.js';
  
const BubbleMap = () => {

    const [data, setData] = useState<any>([]);
  const [layout, setLayout] = useState<any>({});

  useEffect(() => {
    d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv')
      .then(rows => {
        function unpack(rows:any, key:any) {
          return rows.map((row:any) => row[key]);
        }

        var cityName = unpack(rows, 'name'),
          cityPop = unpack(rows, 'pop'),
          cityLat = unpack(rows, 'lat'),
          cityLon = unpack(rows, 'lon'),
          color = [, 'rgb(255,65,54)', 'rgb(133,20,75)', 'rgb(255,133,27)', 'lightgrey'],
          citySize = [],
          hoverText = [],
          scale = 50000;

        for (var i = 0; i < cityPop.length; i++) {
          var currentSize = cityPop[i] / scale;
          var currentText = cityName[i] + ' pop: ' + cityPop[i];
          citySize.push(currentSize);
          hoverText.push(currentText);
        }

        var data = [
          {
            type: 'scattergeo',
            locationmode: 'USA-states',
            lat: cityLat,
            lon: cityLon,
            hoverinfo: 'text',
            text: hoverText,
            marker: {
              size: citySize,
              line: {
                color: 'black',
                width: 2,
              },
            },
          },
        ];

        var layout = {
          title: '2014 US City Populations',
          showlegend: false,
          geo: {
            scope: 'usa',
            projection: {
              type: 'albers usa',
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)',
          },
          width: 500,
          height: 350,
        };

        setData(data);
        setLayout(layout);
      })
      .catch(error => console.error('Error loading CSV:', error));
  }, []);

      
  return (
    <div>
      <Plot
      data={data}
      layout={layout}
      style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 2px', border:'1px solid lightgrey', borderRadius: '20px', display:'flex', alignItems:'center', justifyContent:'center' }}
      />
    </div>
  )
}

export default BubbleMap
