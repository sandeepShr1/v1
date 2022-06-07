export const AxisLeft = ({ yScale, innerWidth, tickOffset }) =>
      yScale.ticks().map(tickValue => (
            <g className="tick" key={tickValue} transform={`translate(0,${yScale(tickValue)})`}>
                  <line x2={innerWidth} />
                  <text

                        style={{ textAnchor: 'end' }}
                        x={-tickOffset}
                        dy=".32em"
                        dx="-.34em"
                  >
                        {tickValue}
                  </text>
            </g>

      ))