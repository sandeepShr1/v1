import { csv } from 'd3';
import { useState, useEffect } from 'react';

const row = d => {
      d.lat = +d.lat;
      d.lng = +d.lng;
      d.population = +d.population;
      return d;
}

export const useCities = () => {
      const url = "https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv";
      const [data, setData] = useState(null);
      useEffect(() => {
            csv(url, row).then(setData);
            // eslint-disable-next-line
      }, []);
      return data;
}
