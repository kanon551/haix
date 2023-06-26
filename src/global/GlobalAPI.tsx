import * as d3 from 'd3';


export const originalURL = "https://raw.githubusercontent.com";
export const generalURL = `${originalURL}/plotly/datasets/master`;



export const getMapsData = async (specificURL: string) => {
  const res = await d3.csv(`${generalURL}/${specificURL}.csv`);
  return res
};


/////////////////// Global Function     ////////////////////////////////
export const unpack = (rows:any, key:any)=> {
    return rows.map((row:any) => row[key]);
}
