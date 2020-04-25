import React, { Component } from 'react'
import './styles/index.scss'

import Logo from './components/Logo'
import Virus from './components/Virus'
import Cell from './components/Cell'
import Timeline from './components/Timeline'

const covid19 = new Virus('covid19')

const keyframes = [
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
}

class App extends Component<Props, State> {
  state: Readonly<State> = {
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore ' +
      'et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
      'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }

  descriptionUpdated = (description: string) => {
    this.setState({
      description,
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
            <h4 className="subtitle">What is an Infection</h4>
            <p>{this.state.description}</p>
          </div>
        </div>
        <div className="nav">
          <button onClick={covid19.move}>Move 1</button>
          <button onClick={covid19.moveTo}>Move 2</button>
        </div>
        <Timeline
          keyframes={keyframes}
          onDescriptionUpdated={this.descriptionUpdated}
        />
      </div>
    )
  }
}

export default App
