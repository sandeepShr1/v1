export const AxisBottom = ({ xScale, innerHeight, tickFormat, tickOffset }) =>
      xScale.ticks().map(tickValue => (
            <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
                  <line
                        y2={innerHeight + tickOffset}

                  />
                  <text
                        y={innerHeight}
                        style={{ textAnchor: "middle" }}
                        dy="1.6em"
                  >{tickFormat(tickValue)}</text>
            </g>
      ))