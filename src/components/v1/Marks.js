export const Marks = ({ yScale, xScale, data, xValue, yValue, toolTipFormate }) =>
      data.map((d) => (
            <circle
                  className="mark"
                  cx={xScale(xValue(d))}
                  cy={yScale(yValue(d))}
                  r={10}
            >
                  <title>{toolTipFormate(xValue(d))}</title>
            </circle>
      ))