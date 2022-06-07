import { csv } from 'd3';
import { useState, useEffect } from 'react';

export const useData = () => {
      const url = "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/iris.csv";
      // const url = "https://gist.githubusercontent.com/sandeepShr1/80d742f48c9384ff6345eec3a3c79cad/raw/population.csv";
      const [data, setData] = useState(null);
      useEffect(() => {
            const row = (d) => {
                  d.sepal_length = +d.sepal_length;
                  d.sepal_width = +d.sepal_width;

                  d.petal_length = +d.petal_length;
                  d.petal_width = +d.petal_width;

                  return d;
            }
            csv(url, row).then(setData);
            // eslint-disable-next-line
      }, []);
      return data;
}
