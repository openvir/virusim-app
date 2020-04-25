import React, { Component } from 'react'

const CELL_MEMBRANE_WIDTH = 20
const CELL_RADIUS: number = 500
const NUCLEUS_RADIUS: number = 150

class Cell extends Component {

  render() {
    return (
      <div className="cell">
        <div className="virusWrapper" style={{ width: '300px', height: '300px', left: '500px' }}>
          <svg
            viewBox={`${-CELL_MEMBRANE_WIDTH} ${-CELL_MEMBRANE_WIDTH} ${CELL_RADIUS * 2 + CELL_MEMBRANE_WIDTH * 2} ${CELL_RADIUS * 2 + CELL_MEMBRANE_WIDTH * 2}`}
            className="pathTest" version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            {/*cell membrane*/}
            <circle fill="#C7DD94" stroke="#98C557" strokeWidth={CELL_MEMBRANE_WIDTH} strokeMiterlimit="10"
                    cx={CELL_RADIUS}
                    cy={CELL_RADIUS}
                    r={CELL_RADIUS}/>
            {/*nucleus*/}
            <circle fill="#96C256" stroke="#81B430" strokeWidth="20" strokeMiterlimit="10"
                    cx={CELL_RADIUS}
                    cy={CELL_RADIUS}
                    r={NUCLEUS_RADIUS}/>
          </svg>
        </div>
      </div>
    )
  }
}

export default Cell
