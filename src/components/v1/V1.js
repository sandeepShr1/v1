import { scaleLinear, scaleTime, timeFormat } from "d3";
import { useData } from './useData';
import { AxisBottom } from "./AxisBottom"
import { AxisLeft } from "./AxisLeft"
import { Marks } from "./Marks"
import { extent } from "d3";
import { bin } from "d3";
import { timeMonths } from "d3";
import { sum } from "d3";
import { max } from "d3";

const xAxisLabelOffset = 50;
const yAxisLabelOffset = 50;


const xAxisLabel = "Time";
const yAxisLabel = "Total Deaths and Missing";

const tickOffset = 0;

const xAxisTickFormat = timeFormat('%m/%d/%Y');

const V1 = ({ height, width, margin }) => {
      const innerHeight = height - margin.top - margin.bottom;
      const innerWidth = width - margin.left - margin.right;
      const data = useData();

      const xValue = (d) => d['Reported Date'];
      const yValue = (d) => d['Total Dead and Missing'];

      if (!data) {
            return <pre>Loading...</pre>
      }

      const xScale = scaleTime()
            // .domain([min(data, xValue), max(data, xValue)]) extends does same
            .domain(extent(data, xValue))
            .range([0, innerWidth])
            .nice(); // make ending points nice number

      const [start, stop] = xScale.domain();

      const binnedData = bin()
            .value(xValue)
            .domain(xScale.domain())
            .thresholds(timeMonths(start, stop))(data)
            .map(array => ({
                  y: sum(array, yValue), // totalDeadAndMissing=y
                  x0: array.x0,
                  x1: array.x1
            }));

      const yScale = scaleLinear()
            .domain([0, max(binnedData, d => d.y)])
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
                              data={binnedData}
                              xScale={xScale}
                              yScale={yScale}
                              tooltipFormat={d => d}
                              innerHeight={innerHeight}
                        />
                  </g>
            </svg >

      )
}

export default V1