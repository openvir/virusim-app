import React, { Component } from 'react'
import Slider from 'rc-slider'

import './Timeline.scss'
import 'rc-slider/assets/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'

import { Keyframe } from '../models/Keyframe'
import { moveElement } from '../utils/animations'

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

  keyframesToMarks() {
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
      for (const element of nextFrame.elements) {
        moveElement(
          element.element.getTarget(),
          element.x,
          element.y,
          nextFrame.seconds - currentFrame.seconds
        )
      }
    }
  }

  currentStep(progress: number): number {
    for (let step = 0; step < this.props.keyframes.length; step++) {
      if (
        progress >= this.props.keyframes[step].seconds &&
        (step === this.props.keyframes.length - 1 ||
          progress < this.props.keyframes[step + 1].seconds)
      ) {
        return step
      }
    }
    return 0
  }

  setProgress(progress: number) {
    let { step } = this.state

    let currentStep = this.currentStep(progress)
    if (currentStep !== step) {
      step = currentStep
      this.stepUpdated(step)
      console.log(`Updated step to ${step}.`)
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
    clearInterval(this.interval)
    this.setState({
      playing: false,
    })
  }

  reset = () => {
    clearInterval(this.interval)
    this.setState(
      {
        playing: false,
      },
      () => {
        this.setProgress(0)
      }
    )
  }

  onSliderChange = (progress: number) => {
    this.setProgress(progress)
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
            marks={this.keyframesToMarks()}
            onChange={this.onSliderChange}
          />
        </div>
      </div>
    )
  }
}

export default Timeline
