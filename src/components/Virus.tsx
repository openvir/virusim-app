import React, { Component } from 'react'
import anime from 'animejs'
import { ReactComponent as VirusSVG } from '../svg/viruszelle.svg'

class Virus extends Component {
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

  move() {
    anime({
      targets: '.virusWrapper',
      top: '30%',
      left: '10%',
      translateX: 0,
      translateY: 0,
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: false,
    })
  }

  moveTo() {
    anime({
      targets: '.virusWrapper',
      translateX: 0,
      translateY: 0,
      left: '50%',
      top: '50%',
      duration: 4000,
      direction: 'forward',
      easing: 'easeOutElastic(1, .8)',
      loop: false,
    })
  }

  moveSpline() {
    const path = anime.path('.pathTest path')
    anime({
      targets: '.virusWrapper',
      translateX: path('x'),
      translateY: path('y'),
      left: '0%',
      top: '0%',
      duration: 40000,
      direction: 'forward',
      easing: 'easeOutElastic(1, .8)',
      loop: false,
      begin: function () {
        // TODO: stop animation
        //document.querySelector('.virusWrapper').style.top = '0';
        //document.querySelector('.virusWrapper').style.left = '0';
      },
    })
  }

  stop() {
    anime({
      targets: '.virusWrapper',
    })
  }

  componentDidMount() {
    this.idle()
    console.log('mount')
  }

  render() {
    return (
      <div className="Virus">
        <div className="virusWrapper" style={{ width: '30%', height: '30%' }}>
          <VirusSVG className="virus" />
        </div>
      </div>
    )
  }
}

export default Virus
