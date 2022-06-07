export const AxisBottom = ({ xScale, innerHeight, tickFormat }) =>
      xScale.ticks().map(tickValue => (
            <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
                  <line
                        y2={innerHeight + 3}

                  />
                  <text
                        y={innerHeight}
                        style={{ textAnchor: "middle" }}
                        dy="1em"
                  >{tickFormat(tickValue)}</text>
            </g>
      ))