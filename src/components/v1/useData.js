import { csv } from 'd3';
import { useState, useEffect } from 'react';

export const useData = () => {
      const url = "https://gist.githubusercontent.com/sandeepShr1/80d742f48c9384ff6345eec3a3c79cad/raw/population.csv";
      const [data, setData] = useState(null);
      useEffect(() => {
            const row = (d) => {
                  d.Population = +d["2020"] * 1000;
                  return d;
            }
            csv(url, row).then((data) =>
                  setData(data.slice(0, 10))
            );
            // eslint-disable-next-line
      }, []);
      return data;
}
