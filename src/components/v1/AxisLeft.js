export const AxisLeft = ({ yScale }) =>
      yScale.domain().map(tickValue => (
            <g className="tick">
                  <text
                        key={tickValue}
                        y={yScale(tickValue) + yScale.bandwidth() / 2}
                        style={{ textAnchor: "end" }}
                        dy=".32.em"
                        x={-3}
                  >{tickValue}</text>
            </g>

      ))