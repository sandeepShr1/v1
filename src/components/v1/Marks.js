export const Marks = ({ yScale, xScale, data, xValue, yValue, colorValue, colorScale, toolTipFormate }) =>
      data.map((d, i) => (
            <circle
                  key={i}
                  className="mark"
                  cx={xScale(xValue(d))}
                  cy={yScale(yValue(d))}
                  fill={colorScale(colorValue(d))}
                  r={10}
            >
                  <title>{toolTipFormate(xValue(d))}</title>
            </circle>
      ))