import React, { Component } from 'react'
import anime from 'animejs'
import { ReactComponent as VirusSVG } from '../svg/viruszelle_replica.svg'
import { VisualElement } from '../models/Keyframe'

class Invasion extends Component implements VisualElement {
    getTarget(): string {
        return '.invasionWrapper'
    }

    setStatus(status: string, remove: boolean): void {
        console.log(`Updated status of virus to ${status}.`)
        if (status === 'hidden') {
          if (remove) {
            anime({
              targets: '.invasionWrapper',
              opacity: 1,
              duration: 1000,
            })
          } else {
            anime({
              targets: '.invasionWrapper',
              opacity: 0,
              duration: 1000,
            })
          }
        }
      }

    render() {
      return (
        <div className="invasionWrapper"> 
            <div className="vir" style={{ width: '140px', height: '140px' }}>
                <VirusSVG />
            </div>
        </div>
      )
    }
  }
  
  export default Invasion