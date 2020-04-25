import React from 'react'
import './index.scss'

import Virus from './components/Virus'
import Cell from './components/Cell'
import Timeline from './components/Timeline'

const covid19 = new Virus('covid19');

const keyframes = [
  {
    id: 1,
    seconds: 0,
    title: 'Initial',
  },
  {
    id: 2,
    seconds: 30,
    title: 'Key + Lock',
  },
  {
    id: 3,
    seconds: 40,
    title: 'Viral RNA Release',
  },
]

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <div className="nav">
        <button onClick={covid19.move}>Move 1</button>
        <button onClick={covid19.moveTo} >Move 2</button>
        <button onClick={covid19.moveSpline} >Move Spline</button>
      </div>
      <div className="stage">
        <div className="scene">
          {covid19.render()}
          <Virus />
          <Cell />
        </div>
      </div>
      <Timeline keyframes={keyframes} />
    </div>
  )
}

export default App
