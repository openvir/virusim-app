import React, { Component } from 'react'
import Slider from 'rc-slider'

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
  animationStep: number
  playing: boolean
}

class Timeline extends Component<Props, State> {
  interval: any

  state: Readonly<State> = {
    progress: 0,
    step: 0,
    animationStep: 0,
    playing: false,
  }

  componentDidMount(): void {
    this.stepUpdated(0)
  }

  keyframesToMarks() {
    const marks: any = {}
    for (const keyframe of this.props.keyframes) {
      marks[keyframe.seconds.toString()] = keyframe.mark
    }
    return marks
  }

  stepUpdated(step: number) {
    const currentFrame = this.props.keyframes[step]
    if (this.props.onKeyframeUpdated) {
      this.props.onKeyframeUpdated(currentFrame)
    }
    if (this.state.playing) {
      if (step + 1 < this.props.keyframes.length) {
        this.setState({
          animationStep: step + 1,
        })
        const nextFrame = this.props.keyframes[step + 1]
        for (const element of currentFrame.elements) {
          if (element.status) {
            element.element.setStatus(element.status, false)
          }
        }
        for (const element of nextFrame.elements) {
          if (element.x && element.y) {
            moveElement(
              element.element.getTarget(),
              element.x,
              element.y,
              element.rotation || 0,
              element.scale || 1,
              nextFrame.seconds - currentFrame.seconds
            )
          }
        }
      }
    } else {
      // we're updating to the last valid position
      // this can potentially done much more efficient since we only need the last valid position of every element
      if (this.state.animationStep <= step) {
        for (let i = this.state.animationStep; i <= step; i++) {
          const frame = this.props.keyframes[i]
          for (const element of frame.elements) {
            if (element.status) {
              element.element.setStatus(element.status, false)
            }
            if (element.x && element.y) {
              moveElement(
                element.element.getTarget(),
                element.x,
                element.y,
                element.rotation || 0,
                element.scale || 1,
                1
              )
            }
          }
        }
      } else {
        // going backwards in time
        for (let i = this.state.animationStep; i >= step; i--) {
          const frame = this.props.keyframes[i]
          for (const element of frame.elements) {
            if (element.status) {
              element.element.setStatus(element.status, true)
            }
            if (element.x && element.y) {
              moveElement(
                element.element.getTarget(),
                element.x,
                element.y,
                element.rotation || 0,
                element.scale || 1,
                1
              )
            }
          }
        }
      }
      this.setState({
        animationStep: step,
      })
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
    this.setState(
      {
        playing: true,
      },
      () => {
        this.stepUpdated(this.state.step)
        this.interval = setInterval(
          () => this.setProgress(this.state.progress + 1),
          500
        )
      }
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
    this.pause()
    this.setProgress(progress)
  }

  render() {
    return (
      <div className="timeline">
        <div className="controls">
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
        </div>
        <h6 className="subtitle">Timeline</h6>
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
