import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
      'https://gist.githubusercontent.com/sandeepShr1/30f968f5228a2d9d3334159286fd18c3/raw/Migrants%2520Dead%2520data';
export const useData = () => {
      const [data, setData] = useState(null);

      useEffect(() => {
            const row = d => {
                  d['Total Dead and Missing'] = +d['Total Dead and Missing'];
                  d['Reported Date'] = new Date(d['Reported Date']);
                  return d;
            };
            csv(csvUrl, row).then(setData);
      }, []);

      return data;
};