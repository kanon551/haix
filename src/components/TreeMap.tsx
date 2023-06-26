import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import Plot from 'react-plotly.js';


interface TreemapData {
    type: string;
    ids: string[];
    labels: string[];
    parents: string[];
  }


const TreeMap = () => {
    const [data, setData] = useState<any>([]);
    const [layout, setLayout] = useState<object>({});

    useEffect(() => {
        d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/coffee-flavors.csv').then(rows => {
          function unpack(rows: any[], key: string): string[] {
            return rows.map(row => row[key]);
          }
    
          var data: TreemapData[] = [
            {
              type: 'treemap',
              ids: unpack(rows, 'ids'),
              labels: unpack(rows, 'labels'),
              parents: unpack(rows, 'parents'),
            },
          ];
    
          var layout = {
            title: 'Nested Tree Map',
            width: 500,
            height: 350,
          };


          setData(data);
          setLayout(layout);
        });
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

export default TreeMap
