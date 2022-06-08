import { useData } from './useData';
import { Marks } from "./Marks"


const V1 = ({ height, width, margin }) => {

      const data = useData();

      if (!data) {
            return <pre>Loading...</pre>
      }

      return (
            <svg width={width} height={height} >


                  <Marks
                        data={data}
                  />

            </svg >
      )
}

export default V1