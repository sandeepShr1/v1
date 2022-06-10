import { useWorldAtlas } from './useWorldAtlas';
import { Marks } from "./Marks"
import { useCities } from './useCities';
import { scaleSqrt, max } from 'd3';


const V1 = ({ height, width }) => {

      const data = useWorldAtlas();
      const cities = useCities();


      if (!data || !cities) {
            return <pre>Loading...</pre>
      }

      const sizeValue = d => d.population;
      const maxRadius = 15;

      const sizeScale = scaleSqrt()
            .domain([0, max(cities, sizeValue)])
            .range([0, maxRadius])

      return (
            <svg width={width} height={height} >


                  <Marks
                        data={data}
                        cities={cities}
                        sizeScale={sizeScale}
                        sizeValue={sizeValue}
                  />

            </svg >
      )
}

export default V1