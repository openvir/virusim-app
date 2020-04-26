import React, { Component } from 'react'

import { ReactComponent as RnaSVG } from '../svg/viralRna.svg'
import './Rna.scss'

class Rna extends Component {
  render() {
    return (
      <div
        className="rnaWrapper"
        style={{ zIndex: 1000, width: '30%', height: '30%' }}
      >
        <RnaSVG className="rna" />
      </div>
    )
  }
}

export default Rna
