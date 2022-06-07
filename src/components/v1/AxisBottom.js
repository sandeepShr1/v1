export const AxisBottom = ({ xScale, innerHeight }) =>
      xScale.ticks().map(tickValue => (
            <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
                  <line
                        y2={innerHeight + 3}
                        stroke='black'
                  />
                  <text
                        y={innerHeight}
                        style={{ textAnchor: "middle" }}
                        dy="0.72em"
                  >{tickValue}</text>
            </g>
      ))