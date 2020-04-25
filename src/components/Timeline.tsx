import React, { Component } from 'react'
import Slider from 'rc-slider'
import anime from 'animejs'

import './Timeline.scss'
import 'rc-slider/assets/index.css'

const animation = anime({
  targets: '.play-pause-demo .el',
  translateX: 270,
  delay: function (el, i) {
    console.log('huhu')
    console.log(i)
    return i * 100
  },
  direction: 'alternate',
  loop: true,
  autoplay: false,
  easing: 'easeInOutSine',
  update: function (anim) {
    console.log(anim.progress)
  },
})

const keyframes = [
  {
    id: 1,
    name: 'Init',
    description: '...',
    time: 0,
  },
  {
    id: 2,
    name: 'Cell Docking',
    description: '...',
    time: 100,
  },
  {
    id: 2,
    name: 'Cell Entry',
    description: '...',
    time: 200,
  },
]

class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <Slider
          style={{ width: '80%' }}
          marks={{
            '1': '1',
            '50': '50',
          }}
        />
        <button
          onClick={() => {
            console.log('play')
            animation.play()
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            console.log('pause')
            animation.pause()
          }}
        >
          Pause
        </button>
      </div>
    )
  }
}

export default Timeline
