import React from 'react'
import './styles/index.scss'

import Virus from './components/Virus'
import Cell from './components/Cell'
import Timeline from './components/Timeline'

const covid19 = new Virus('covid19');

function App() {
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
      <h1 className="logo">VIRUSIM</h1>
        <div className="info-box">
          <h4 className="subtitle">What is an Infection</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <Timeline />
      <div className="nav">
        <button onClick={covid19.move}>Move 1</button>
        <button onClick={covid19.moveTo} >Move 2</button>
        <button onClick={covid19.moveSpline} >Move Spline</button>
      </div>
    </div>
  )
}

export default App
