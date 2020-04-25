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
  onKeyframeUpdated?: Function
}

type State = {
  progress: number
  step: number
  playing: boolean
}

class Timeline extends Component<Props, State> {
  interval: any

  state: Readonly<State> = {
    progress: 0,
    step: 0,
    playing: false,
  }

  keyFramesToMarks() {
    const marks: any = {}
    for (const keyframe of this.props.keyframes) {
      marks[keyframe.seconds.toString()] = keyframe.title
    }
    return marks
  }

  stepUpdated(step: number) {
    const currentFrame = this.props.keyframes[step]
    if (this.props.onKeyframeUpdated) {
      this.props.onKeyframeUpdated(currentFrame)
    }
    if (step + 1 < this.props.keyframes.length) {
      const nextFrame = this.props.keyframes[step + 1]
      if (nextFrame.elements) {
        for (const element of nextFrame.elements) {
          anime({
            targets: element.element.getTarget(),
            translateX: 0,
            translateY: 0,
            left: `${element.x}px`,
            top: `${element.y}px`,
            duration: (nextFrame.seconds - currentFrame.seconds) * 1000,
            direction: 'forward',
            easing: 'easeOutElastic(1, .8)',
            loop: false,
          })
        }
      }
    }
  }

  setProgress(progress: number) {
    let { step } = this.state

    for (let i = 0; i < this.props.keyframes.length; i++) {
      if (
        progress >= this.props.keyframes[i].seconds &&
        (i === this.props.keyframes.length - 1 ||
          progress < this.props.keyframes[i + 1].seconds)
      ) {
        if (i !== step) {
          step = i
          this.stepUpdated(step)
          console.log(`Updated step to ${step}.`)
        }
      }
    }
    this.setState({ progress, step })
  }

  play = () => {
    this.setState({
      playing: true,
    })
    this.stepUpdated(0)
    this.interval = setInterval(
      () => this.setProgress(this.state.progress + 1),
      100
    )
  }

  pause = () => {
    this.setState({
      playing: false,
    })
    clearInterval(this.interval)
  }

  reset = () => {
    clearInterval(this.interval)
    this.setState({
      playing: false,
    })
    this.setProgress(0)
  }

  onSliderChange = (e: any) => {
    this.setProgress(e)
  }

  render() {
    return (
      <div className="timeline">
        <button
          onClick={this.play}
          style={{ marginLeft: '10px' }}
          disabled={this.state.playing}
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button onClick={this.pause} disabled={!this.state.playing}>
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button onClick={this.reset}>
          <FontAwesomeIcon icon={faRedo} />
        </button>
        <div className="slider-wrapper">
          <Slider
            value={this.state.progress}
            marks={this.keyFramesToMarks()}
            onChange={this.onSliderChange}
          />
        </div>
      </div>
    )
  }
}

export default Timeline
