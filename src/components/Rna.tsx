import React, { Component } from 'react'
import anime from 'animejs'

import { VisualElement } from '../models/Keyframe'

import { ReactComponent as RnaSVG } from '../svg/viralRna.svg'
import './Rna.scss'

class Rna extends Component implements VisualElement {
  setStatus(status: string, remove: boolean): void {}

  getTarget() {
    return '.rnaWrapper'
  }

  idle() {
    anime({
      targets: '.rna',
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
