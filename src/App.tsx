import React, { Component } from 'react'
import './styles/index.scss'

import Logo from './components/Logo'
import Virus from './components/Virus'
import Cell from './components/Cell'
import Timeline from './components/Timeline'
import Zoom from './components/Zoom'

import { Keyframe } from './models/Keyframe'
import Rna from './components/Rna'

const covid19 = new Virus('covid19')
const rna = new Rna('')

const keyframes: Array<Keyframe> = [
  {
    seconds: 0,
    title: 'Virus',
    description: '1',
    elements: [
      {
        element: covid19,
        x: 800,
        y: 400,
      },
      {
        element: rna,
        x: 800,
        y: 400,
      },
    ],
  },
  {
    seconds: 10,
    title: 'Virus + Host Cell',
    description: '2',
    elements: [
      {
        element: covid19,
        x: 460,
        y: 260,
      },
      {
        element: rna,
        x: 460,
        y: 260,
      },
    ],
  },
  {
    seconds: 20,
    title: 'Key | Lock',
    description: '3',
    elements: [],
  },
  {
    seconds: 30,
    title: 'Door Opens',
    description: '4',
    elements: [],
  },
  {
    seconds: 40,
    title: 'Entry - Yeah',
    description: '5',
    elements: [],
  },
  {
    seconds: 45,
    title: 'Viral RNA Release',
    description: '6',
    elements: [
      {
        element: rna,
        x: 200,
        y: 200,
      },
    ],
  },
  {
    seconds: 50,
    title: 'Production of Helper = Viral Polymerase',
    description: '7',
    elements: [],
  },
  {
    seconds: 60,
    title: 'RNA Replication',
    description: '8',
    elements: [],
  },
  {
    seconds: 70,
    title: 'Transcription + Translation',
    description: '9',
    elements: [],
  },
  {
    seconds: 80,
    title: 'Viral RNA Packaging in Cytoplasm',
    description: '10',
    elements: [],
  },
  {
    seconds: 85,
    title: 'Structural Protein Synthesis',
    description: '11',
    elements: [],
  },
  {
    seconds: 90,
    title: 'Budding + Assembly',
    description: '12',
    elements: [],
  },
  {
    seconds: 95,
    title: 'Release',
    description: '13',
    elements: [],
  },
  {
    seconds: 100,
    title: 'Invasion',
    description: '14',
    elements: [],
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
            {rna.render()}
            <Rna />
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
        <Zoom />
        <div className="bottombar">
          <Timeline
            keyframes={keyframes}
            onKeyframeUpdated={this.keyframeUpdated}
          />
        </div>
      </div>
    )
  }
}

export default App
