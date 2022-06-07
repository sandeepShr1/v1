export const Marks = ({ yScale, xScale, data, xValue, yValue }) =>
      data.map((d) => (
            <rect
                  key={yValue}
                  y={yScale(yValue(d))}
                  width={xScale(xValue(d))}
                  height={yScale.bandwidth()}
            />
      ))