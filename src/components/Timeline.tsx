import React, { Component } from 'react'
import Slider from 'rc-slider'
import anime from 'animejs'

import './Timeline.scss'
import 'rc-slider/assets/index.css'

import { Keyframe } from '../models/Keyframe'

type Props = {
  keyframes: Array<Keyframe>
}

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
    loop: false,
    autoplay: false,
    easing: 'easeInOutSine',
    update: (anim) => {
      this.setState({
        progress: anim.progress,
      })
    },
  })

  state: Readonly<State> = {
    progress: 0,
  }

  keyFramesToMarks() {
    const marks: any = {}
    for (const keyframe of this.props.keyframes) {
      marks[keyframe.seconds.toString()] = keyframe.title
    }
    return marks
  }

  render() {
    return (
      <div className="timeline">
        <Slider
          value={this.state.progress}
          style={{ width: '80%' }}
          marks={this.keyFramesToMarks()}
        />
        <button onClick={this.animation.play}>Play</button>
        <button onClick={this.animation.pause}>Pause</button>
        <button onClick={this.animation.restart}>Restart</button>
      </div>
    )
  }
}

export default Timeline
