import React, { Component } from 'react'

const CELL_RADIUS: number = 500
const NUCLEUS_RADIUS: number = 150

class Cell extends Component {

  render() {
    return (
      <div className="cell">
        <div className="virusWrapper" style={{ width: '100px', height: '100px' }}>
          <div className="pathTest">
            <svg viewBox="0 0 1000 1000" className="pathTest" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
              {/*cell membrane*/}
              <circle fill="#99CEBB" stroke="#556A86" stroke-width="5" stroke-miterlimit="10"
                      cx={CELL_RADIUS}
                      cy={CELL_RADIUS}
                      r={CELL_RADIUS}/>
              {/*nucleus*/}
              <circle fill="#A75FD4" stroke="#556A86" stroke-width="5" stroke-miterlimit="10"
                      cx={CELL_RADIUS}
                      cy={CELL_RADIUS}
                      r={NUCLEUS_RADIUS}/>
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default Cell
