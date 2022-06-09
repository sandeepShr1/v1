import { useState } from "react";
import { scaleLinear, format, scaleOrdinal } from "d3";
import { useData } from './useData';
import { AxisBottom } from "./AxisBottom"
import { AxisLeft } from "./AxisLeft"
import { Marks } from "./Marks"
import { extent } from "d3";
import { Dropdown } from "./Dropdown";

const xAxisLabelOffset = 45;
const yAxisLabelOffset = 40;
const siFormat = format(".2s");


const attribute = [
      { value: "sepal_length", label: "Sepal Length" },
      { value: "sepal_width", label: "Sepal Width" },
      { value: "petal_length", label: "Petal Length" },
      { value: "petal_width", label: "Petal Width" },
      { value: "species", label: "Species" },
]

const getLabel = (value) => {
      for (let i = 0; i < attribute.length; i++) {
            if (attribute[i].value === value) {
                  return attribute[i].label
            }
      }
}


// For initial Values
const initialXAttribute = "sepal_length";
const initialYAttribute = "sepal_width";


const tickOffset = 0;

const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");


const V1 = ({ height, width, margin }) => {

      const [xAttribute, setXAttribute] = useState(initialXAttribute);
      const [yAttribute, setYAttribute] = useState(initialYAttribute);

      const xValue = (d) => d[xAttribute];
      const yValue = (d) => d[yAttribute];
      const colorValue = (d) => d["species"];

      const innerHeight = height - margin.top - margin.bottom;
      const innerWidth = width - margin.left - margin.right;
      const data = useData();

      const xAxisLabel = getLabel(xAttribute);
      const yAxisLabel = getLabel(yAttribute);


      if (!data) {
            return <pre>Loading...</pre>
      }

      const xScale = scaleLinear()
            // .domain([min(data, xValue), max(data, xValue)]) extends does same
            .domain(extent(data, xValue))
            .range([0, innerWidth])
            .nice(); // make ending points nice number

      const yScale = scaleLinear()
            .domain(extent(data, yValue))
            .range([0, innerHeight])
            .nice();
      const colorScale = scaleOrdinal()
            .domain(data.map(colorValue))
            .range(["#E6842A", "#137B80", "#8E6C8A"])

      return (
            <>
                  <div className="dropdown-container">
                        <div className="d-container">
                              <label htmlFor="x-select">X</label>
                              <Dropdown
                                    options={attribute}
                                    id="x-select"
                                    selectedValue={xAttribute}
                                    onSelectedValueChange={setXAttribute}
                              />
                        </div>
                        <div className="d-container">
                              <label htmlFor="y-select">Y</label>
                              <Dropdown
                                    options={attribute}
                                    id="y-select"
                                    selectedValue={yAttribute}
                                    onSelectedValueChange={setYAttribute}
                              />
                        </div>
                  </div>
                  <svg width={width} height={height} >
                        <g transform={`translate(${margin.left},${margin.top})`}>
                              <AxisBottom
                                    xScale={xScale}
                                    innerHeight={innerHeight}
                                    tickFormat={xAxisTickFormat}
                                    tickOffset={tickOffset}
                              />
                              <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset />
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
                                    data={data}
                                    xScale={xScale}
                                    yScale={yScale}
                                    xValue={xValue}
                                    yValue={yValue}
                                    colorScale={colorScale}
                                    colorValue={colorValue}
                                    toolTipFormate={xAxisTickFormat}
                              />
                        </g>
                  </svg >
            </>
      )
}

export default V1