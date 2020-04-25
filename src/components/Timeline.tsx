import React, { Component } from 'react'
import Slider from 'rc-slider'
import anime from 'animejs'

import './Timeline.scss'
import 'rc-slider/assets/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'

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
        <button onClick={this.animation.play} style={{ marginLeft: '10px' }}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={this.animation.pause}>
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button onClick={this.animation.restart}>
          <FontAwesomeIcon icon={faRedo} />
        </button>
        <div className="slider-wrapper">
          <Slider value={this.state.progress} marks={this.keyFramesToMarks()} />
        </div>
      </div>
    )
  }
}

export default Timeline
