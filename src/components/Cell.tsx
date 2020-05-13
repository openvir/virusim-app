import React, { Component } from 'react'
import { ReactComponent as BodyCellSVG } from './../svg/zelle_full.svg'

class Cell extends Component {
  render() {
    return (
      <div className="cell" style={{ width: '800px', height: '800px', left: '-220px', top: '-220px' }}>
        <BodyCellSVG />
      </div>
    )
  }
}

export default Cell
