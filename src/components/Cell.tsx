import React, { Component } from 'react'
import { ReactComponent as BodyCellSVG } from './../svg/zelle_full.svg'

class Cell extends Component {
  render() {
    return (
      <div className="cell" style={{ width: '700px', height: '700px', left: '-170px', top: '-170px' }}>
        <BodyCellSVG />
      </div>
    )
  }
}

export default Cell
