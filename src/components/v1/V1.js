import { scaleLinear, scaleTime, timeFormat } from "d3";
import { useData } from './useData';
import { AxisBottom } from "./AxisBottom"
import { AxisLeft } from "./AxisLeft"
import { Marks } from "./Marks"
import { extent } from "d3";

const xAxisLabelOffset = 50;
const yAxisLabelOffset = 40;


const xAxisLabel = "Time";
const yAxisLabel = "Temperature";

const tickOffset = 0;

const xAxisTickFormat = timeFormat("%a");

const V1 = ({ height, width, margin }) => {
      const innerHeight = height - margin.top - margin.bottom;
      const innerWidth = width - margin.left - margin.right;
      const data = useData();

      const xValue = (d) => d.timestamp;
      const yValue = (d) => d.temperature;

      if (!data) {
            return <pre>Loading...</pre>
      }

      const xScale = scaleTime()
            // .domain([min(data, xValue), max(data, xValue)]) extends does same
            .domain(extent(data, xValue))
            .range([0, innerWidth])
            .nice(); // make ending points nice number

      const yScale = scaleLinear()
            .domain(extent(data, yValue))
            .range([innerHeight, 0])
            .nice();


      return (
            <svg width={width} height={height} >
                  <g transform={`translate(${margin.left},${margin.top})`}>
                        <AxisBottom
                              xScale={xScale}
                              innerHeight={innerHeight}
                              tickFormat={xAxisTickFormat}
                              tickOffset={tickOffset}
                        />
                        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={tickOffset} />
                        <text
                              className="label-text"
                              x={innerWidth / 2}
                              y={innerHeight + xAxisLabelOffset}
                              textAnchor="middle"
                        >{xAxisLabel}</text>

                        <text
                              className="label-text"
                              textAnchor="middle"
                              transform={`translate(${- yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
                        >
                              {yAxisLabel}
                        </text>

                        <Marks
                              yScale={yScale}
                              xScale={xScale}
                              data={data}
                              xValue={xValue}
                              yValue={yValue}
                              toolTipFormate={xAxisTickFormat}
                              circleRadius={4}
                        />
                  </g>
            </svg >
      )
}

export default V1