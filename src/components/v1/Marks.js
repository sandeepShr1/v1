import { curveNatural } from "d3";
import { line } from "d3";

export const Marks = ({ yScale, xScale, data, xValue, yValue, toolTipFormate, circleRadius }) =>
      data.map((d) => (
            <g key={d.temperature} className="marks">
                  <path
                        fill="none"
                        stroke="black"
                        d={line()
                              .x(d => xScale(xValue(d)))
                              .y(d => yScale(yValue(d)))
                              .curve(curveNatural)(data)} />
                  {/* {
                        <circle
                              cx={xScale(xValue(d))}
                              cy={yScale(yValue(d))}
                              r={circleRadius}
                        >
                              <title>{toolTipFormate(xValue(d))}</title>
                        </circle>
                  } */}
            </g>
      ))