import React, { Component } from 'react'
import Slider from 'rc-slider'
import anime from 'animejs'

import './Timeline.scss'
import 'rc-slider/assets/index.css'

type Props = {}

type State = {
  progress: number
}

class Timeline extends Component<Props, State> {
  animation = anime({
    targets: '.play-pause-demo .el',
    translateX: 270,
    delay: (el, i) => {
      return i * 100
    },
    direction: 'alternate',
    loop: true,
    autoplay: false,
    easing: 'easeInOutSine',
    update: (anim) => {
      this.setState({
        progress: anim.progress,
      })
    },
  })

  state: Readonly<State> = {
    progress: 10,
  }

  render() {
    return (
      <div className="timeline">
        <Slider
          value={this.state.progress}
          style={{ width: '80%' }}
          marks={{
            '1': '1',
            '50': '50',
          }}
        />
        <button
          onClick={() => {
            this.animation.play()
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            this.animation.pause()
          }}
        >
          Pause
        </button>
      </div>
    )
  }
}

export default Timeline
