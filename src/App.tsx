import React from 'react'
import './index.scss'

import Virus from './components/Virus'
import Cell from './components/Cell'
import Timeline from './components/Timeline'

const covid19 = new Virus('covid19');

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
      <Timeline />
    </div>
  )
}

export default App
