import React, { Component } from 'react'
import './styles/index.scss'

import Logo from './components/Logo'
import Virus from './components/Virus'
import Cell from './components/Cell'
import Timeline from './components/Timeline'
import Zoom from './components/Zoom'

import { Keyframe } from './models/Keyframe'

const covid19 = new Virus('covid19')

const keyframes: Array<Keyframe> = [
  {
    id: 1,
    seconds: 0,
    title: 'Initial',
    description: '1',
    elements: [
      {
        element: covid19,
        x: 0,
        y: 0,
      },
    ],
  },
  {
    id: 2,
    seconds: 10,
    title: 'Key + Lock',
    description: '2',
    elements: [
      {
        element: covid19,
        x: 100,
        y: 100,
      },
    ],
  },
  {
    id: 3,
    seconds: 20,
    title: 'Viral RNA Release',
    description: '3',
    elements: [
      {
        element: covid19,
        x: 100,
        y: 400,
      },
    ],
  },
]

type Props = {}

type State = {
  description: string
  title: string
}

class App extends Component<Props, State> {
  state: Readonly<State> = {
    title: 'What is an Infection',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore ' +
      'et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
      'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }

  keyframeUpdated = (keyframe: Keyframe) => {
    this.setState({
      title: keyframe.title,
      description: keyframe.description,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="stage">
          <div className="scene">
            {covid19.render()}
            <Virus />
            <Cell />
          </div>
        </div>
        <div className="sidebar">
          <Logo />
          <div className="info-box">
            <h4 className="subtitle">{this.state.title}</h4>
            <p>{this.state.description}</p>
          </div>
        </div>
        <Zoom/>
        <Timeline
          keyframes={keyframes}
          onKeyframeUpdated={this.keyframeUpdated}
        />
      </div>
    )
  }
}

export default App
