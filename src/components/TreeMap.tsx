import React, { useEffect, useState } from 'react';
import { getMapsData, unpack } from '../global/GlobalAPI';
import CommonPlot from '../global/CommonPlot';


interface TreemapData {
    type: string;
    ids: string[];
    labels: string[];
    parents: string[];
  }


const TreeMap = () => {
    const [data, setData] = useState<any>([]);
    const [layout, setLayout] = useState<object>({});

    useEffect(()=> {
      getMapsData('coffee-flavors').then(rows => {
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
      }).catch(error => console.error('Error loading CSV:', error));
    },[])

  return (
      <div>
       <CommonPlot data={data} layout={layout}/>
    </div>
  )
}

export default TreeMap
