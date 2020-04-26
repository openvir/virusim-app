import React, { Component } from 'react'
import anime from 'animejs'
import { ReactComponent as VirusSVG } from '../svg/viruszelle.svg'

import Rna from './Rna'

import { VisualElement } from '../models/Keyframe'

class Virus extends Component implements VisualElement {
  getTarget(): string {
    return '.virusWrapper'
  }

  setStatus(status: string): void {
    console.log(`Updated status of virus to ${status}.`)
  }

  idle() {
    anime({
      targets: '.virus',
      duration: 10000,
      rotate: '360',
      direction: 'forward',
      loop: true,
      easing: 'linear',
      scale: [0.8, 1, 0.8, 1, 0.8, 1, 0.8, 1],
    })
  }

  componentDidMount() {
    this.idle()
  }

  render() {
    return (
      <div className="Virus">
        <div className="virusWrapper" style={{ width: '30%', height: '30%' }}>
          <VirusSVG className="virus" />
        </div>
        <Rna />
      </div>
    )
  }
}

export default Virus
