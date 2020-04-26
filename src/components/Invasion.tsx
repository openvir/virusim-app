import React, { Component } from 'react'
import anime from 'animejs'
import { ReactComponent as VirusSVG } from '../svg/viruszelle_replica.svg'
import { VisualElement } from '../models/Keyframe'

class Invasion extends Component implements VisualElement {
    getTarget(): string {
        return '.invasionWrapper'
    }

    setStatus(status: string, remove: boolean): void {
        console.log(`Updated status of invasion to ${status}.`)
        if (status === 'hidden') {
          if (remove) {
            anime({
              targets: '.invasionWrapper',
              opacity: 0,
              duration: 1000,
            })
          } else {
            anime({
              targets: '.invasionWrapper',
              opacity: 1,
              duration: 1000,
            })
          }
        }
      }

    render() {
      return (
        <div className="invasionWrapper" style={{ opacity: 0 }}> 
            <div className="vir" style={{ width: '140px', height: '140px', top: '-636px', left: '100px', }}>
                <VirusSVG />
            </div>

            <div className="vir" style={{ width: '140px', height: '140px',  top: '-100px', left: '300px' }}>
                <VirusSVG />
            </div>

            <div className="vir" style={{ width: '140px', height: '140px', top: '-636px', left: '-500px', }}>
                <VirusSVG />
            </div>

            <div className="vir" style={{ width: '140px', height: '140px', top: '-100px', left: '-800px', }}>
                <VirusSVG />
            </div>

            <div className="vir" style={{ width: '140px', height: '140px', top: '300px', left: '200px', }}>
                <VirusSVG />
            </div>
        </div>
      )
    }
  }
  
  export default Invasion