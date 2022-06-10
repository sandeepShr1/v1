import { geoNaturalEarth1, geoGraticule, geoPath } from "d3"

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({ data: { land, interiors }, cities }) => (
      <g className="marks">
            <path className="sphere" d={path({ type: 'Sphere' })} />
            <path className="graticule" d={path(graticule())} />
            {
                  land.features.map((feature) => (

                        <path
                              className="land"
                              d={path(feature)}
                        />
                  ))
            }
            <path className="interiors" d={path(interiors)} />

            {cities.map(d => {
                  const [x, y] = projection([d.lng, d.lat]);
                  return <circle cx={x} cy={y} r={1.5} />
            })}
      </g>

)
