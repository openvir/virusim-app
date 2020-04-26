import React, { Component } from 'react'
import anime from 'animejs'
import { ReactComponent as VirusSVG } from '../svg/viruszelle.svg'

import Rna from './Rna'

import { VisualElement } from '../models/Keyframe'

class Virus extends Component implements VisualElement {
  getTarget(): string {
    return '.virusWrapper'
  }

  setStatus(status: string, remove: boolean): void {
    console.log(`Updated status of virus to ${status}.`)
    if (status === 'hidden') {
      if (remove) {
        anime({
          targets: '.virus',
          opacity: 1,
          duration: 1000,
        })
      } else {
        anime({
          targets: '.virus',
          opacity: 0,
          duration: 1000,
        })
      }
    }
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
