import { scaleBand, max, scaleLinear } from "d3";
import { useData } from './useData';
import { AxisBottom } from "./AxisBottom"
import { AxisLeft } from "./AxisLeft"
import { Marks } from "./Marks"



const V1 = ({ height, width, margin }) => {
      const innerHeight = height - margin.top - margin.bottom;
      const innerWidth = width - margin.left - margin.right;
      const data = useData();

      const yValue = (d) => d.Country;
      const xValue = (d) => d.Population;

      if (!data) {
            return <pre>Loading...</pre>
      }

      const yScale = scaleBand()
            .domain(data.map(yValue))
            .range([0, innerHeight]);

      const xScale = scaleLinear()
            .domain([0, max(data, xValue)])
            .range([0, innerWidth]);

      return (
            <svg width={width} height={height} >
                  <g transform={`translate(${margin.left},${margin.top})`}>
                        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
                        <AxisLeft yScale={yScale} />
                        <Marks
                              yScale={yScale}
                              xScale={xScale}
                              data={data}
                              xValue={xValue}
                              yValue={yValue}
                        />
                  </g>
            </svg >
      )
}

export default V1