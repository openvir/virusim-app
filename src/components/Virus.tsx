import React, { Component } from 'react'
import anime from 'animejs'
import { ReactComponent as VirusSVG } from '../svg/viruszelle.svg'

import Rna from './Rna'

import { VisualElement } from '../models/Keyframe'

class Virus extends Component implements VisualElement {
  idleAnimation: anime.AnimeInstance | null = null

  getTarget(): string {
    return '.virusWrapper'
  }

  setStatus(status: string, remove: boolean): void {
    console.log(`Updated status of virus to ${status}.`)
    if (status === 'hidden') {
      if (remove) {
        if (this.idleAnimation) this.idleAnimation.pause()
        anime({
          targets: '.virus',
          opacity: 1,
          duration: 1000,
        })
      } else {
        if (this.idleAnimation) this.idleAnimation.restart()
        anime({
          targets: '.virus',
          opacity: 0,
          duration: 1000,
        })
      }
    }
  }

  idle() {
    this.idleAnimation = anime({
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
    //this.idle()
  }

  render() {
    return (
      <div className="Virus">
        <div className="virusWrapper" style={{ width: '140px', height: '140px' }}>
          <VirusSVG className="virus" />
        </div>
        <Rna />
      </div>
    )
  }
}

export default Virus
