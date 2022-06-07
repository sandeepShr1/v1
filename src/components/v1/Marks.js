export const Marks = ({ yScale, xScale, data, xValue, yValue, toolTipFormate }) =>
      data.map((d) => (
            <rect
                  className="mark"
                  key={yValue}
                  y={yScale(yValue(d))}
                  width={xScale(xValue(d))}
                  height={yScale.bandwidth()}
            >
                  <title>{toolTipFormate(xValue(d))}</title>
            </rect>
      ))