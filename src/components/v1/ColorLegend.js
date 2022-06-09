import React from 'react'

export const ColorLegend = ({ colorScale, tickSpacing, onHover, hoverValue, fadedOpacity }) => {
      return colorScale.domain().map((domainValue, i) => (
            <g
                  className="tick"
                  key={domainValue}
                  transform={`translate(0,${i * tickSpacing})`}
                  onMouseEnter={() => onHover(domainValue)}
                  onMouseOut={() => onHover(null)}
                  opacity={hoverValue && hoverValue !== domainValue ? fadedOpacity : 1}
            >
                  <circle fill={colorScale(domainValue)} r={7} />
                  <text x={20} dy=".32em">{domainValue}</text>
            </g>
      )

      )
}
