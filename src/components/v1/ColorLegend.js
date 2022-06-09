import React from 'react'

export const ColorLegend = ({ colorScale, tickSpacing }) => {
      return colorScale.domain().map((domainValue, i) => (
            <g className="tick" key={domainValue} transform={`translate(0,${i * tickSpacing})`}>
                  <circle fill={colorScale(domainValue)} r={7} />
                  <text x={20} dy=".32em">{domainValue}</text>
            </g>
      )

      )
}
