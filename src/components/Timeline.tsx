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
  step: number
}

class Timeline extends Component<Props, State> {
  interval: any

  state: Readonly<State> = {
    progress: 0,
    step: 0,
  }

  keyFramesToMarks() {
    const marks: any = {}
    for (const keyframe of this.props.keyframes) {
      marks[keyframe.seconds.toString()] = keyframe.title
    }
    return marks
  }

  updateProgress(progress: number) {
    let { step } = this.state

    if (step + 1 < this.props.keyframes.length) {
      const nextFrame = this.props.keyframes[step + 1]
      if (progress >= nextFrame.seconds) {
        step += 1
        console.log('Updated step.')
      }
    }
    this.setState({ progress, step })
  }

  play = () => {
    this.interval = setInterval(
      () => this.updateProgress(this.state.progress + 1),
      100
    )

    anime({
      targets: '.virusWrapper',
      translateX: 0,
      translateY: 0,
      left: '100px',
      top: '100px',
      duration: 4000,
      direction: 'forward',
      easing: 'easeOutElastic(1, .8)',
      loop: false,
    })
  }

  pause = () => {
    clearInterval(this.interval)
  }

  restart = () => {
    clearInterval(this.interval)
    this.setState(
      {
        progress: 0,
        step: 0,
      },
      () => {
        this.play()
      }
    )
  }

  render() {
    return (
      <div className="timeline">
        <button onClick={this.play} style={{ marginLeft: '10px' }}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={this.pause}>
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button onClick={this.restart}>
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
