import { csv } from 'd3';
import { useState, useEffect } from 'react';

export const useData = () => {
      const url = "https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/week_temperature_sf.csv";
      const [data, setData] = useState(null);
      useEffect(() => {
            const row = (d) => {
                  d.temperature = +d.temperature;
                  d.timestamp = new Date(d.timestamp)

                  return d;
            }
            csv(url, row).then(setData);
            // eslint-disable-next-line
      }, []);
      return data;
}
