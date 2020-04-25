import React from 'react'
import './index.scss'

import Virus from './components/Virus'
import Cell from './components/Cell'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="stage">
        <Virus/>
        <Cell/>
      </div>
    </div>
  )
}

export default App
