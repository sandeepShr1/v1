import { useWorldAtlas } from './useWorldAtlas';
import { Marks } from "./Marks"
import { useCities } from './useCities';


const V1 = ({ height, width, margin }) => {

      const data = useWorldAtlas();
      const cities = useCities();


      if (!data || !cities) {
            return <pre>Loading...</pre>
      }

      return (
            <svg width={width} height={height} >


                  <Marks
                        data={data} cities={cities}
                  />

            </svg >
      )
}

export default V1