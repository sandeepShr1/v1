export const Marks = ({ yScale, xScale, data, xValue, yValue, toolTipFormate }) =>
      data.map((d, i) => (
            <circle
                  key={i}
                  className="mark"
                  cx={xScale(xValue(d))}
                  cy={yScale(yValue(d))}
                  r={10}
            >
                  <title>{toolTipFormate(xValue(d))}</title>
            </circle>
      ))