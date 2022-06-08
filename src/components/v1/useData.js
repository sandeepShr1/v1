import { json } from 'd3';
import { useState, useEffect } from 'react';
import { feature, mesh } from "topojson"

export const useData = () => {
      const url = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";
      const [data, setData] = useState(null);
      console.log(data)
      useEffect(() => {
            json(url,).then(topology => {
                  const { countries, land } = topology.objects;
                  setData({
                        land: feature(topology, land),
                        interiors: mesh(topology, countries, (a, b) => a !== b)
                  })
            });
            // eslint-disable-next-line
      }, []);
      return data;
}
