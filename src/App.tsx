import React, { Component } from 'react'
import './styles/index.scss'

import Logo from './components/Logo'
import Virus from './components/Virus'
import Cell from './components/Cell'
import Timeline from './components/Timeline'
import Zoom from './components/Zoom'
import Scene from './components/Scene'

import { Keyframe } from './models/Keyframe'
import Rna from './components/Rna'

const covid19 = new Virus('covid19')
const rna = new Rna('')
const scene = new Scene('');

const keyframes: Array<Keyframe> = [
  {
    seconds: 0,
    title: 'Description virus',
    description:
      'SARS-CoV-2 is a virus belonging to the family of the Coronaviridae; it is closely related to SARS-CoV and MERS-CoV. \n' +
      'Let’s have a look at its main components. At its core we find the genetic information stored in form of a single-stranded RNA; to protect the genome, the RNA strand is bound to a protein and both build the helical nucleocapsid. A lipid envelope surrounds the entire nucleocapsid while the matrix proteins connect the outer envelope with the inner nucleocapsid. On the surface of the virus spike-like proteins stick out which are critical for entering and infecting the host cell. \n',
    elements: [
      {
        element: covid19,
        x: 800,
        y: 500,
        rotation: 0,
        scale: 1,
      },
      {
        element: rna,
        x: 800,
        y: 500,
        rotation: 0,
        scale: 1,
      },
      {
        element: scene,
        x: 1,
        y: 1,
        rotation: 0,
        scale: 1,
      },      
    ],
  },
  {
    seconds: 10,
    title: 'Description host cell ',
    description:
      'Once a droplet with viruses has entered our respiratory system, it travels through the bronchi deep down into our lung where the alveoli sit. These are responsible for the exchange of oxygen and carbon dioxide molecules to and from the bloodstream. Cells that make up the alveoli also happen to have a marker on their surface, named ACE-2 or angiotensin-converting enzyme 2.',
    elements: [
      {
        element: covid19,
        x: 500,
        y: 500,
        rotation: 20,
        scale: 1,
      },
      {
        element: rna,
        x: 500,
        y: 500,
        rotation: 20,
        scale: 1,
      },
      {
        element: scene,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
      },      
    ],
  },
  {
    seconds: 20,
    title: 'Entry',
    description:
      'The ACE-2 marker on the surface of the cells deep down in our lungs acts as a receptor for the spike protein, the characteristic crown-like feature of the SARS-CoV-2 virus. In other words, SARS-CoV-2 carries a key with it that fits perfectly into a lock on our lung cells.',
      elements: [
        {
          element: covid19,
          x: 376,
          y: 442,
          rotation: 156,
          scale: 1,
        },
        {
          element: rna,
          x: 376,
          y: 442,
          rotation: 156,
          scale: 1,
        },
        {
          element: scene,
          x: 340,
          y: -137,
          rotation: 0,
          scale: 2,
        },      
      ],
  },
  {
    seconds: 30,
    title: 'Fusion',
    description:
      'When the spike protein of the virus binds to the ACE-2 receptor, “a door opens” and the virus can enter the cell. This process is called “fusion” and requires the plasma membrane of the host cell and the viral membrane to merge. The key spike protein is also called a fusion protein and can be found on the surface of many other viruses like HIV, Influenza and Ebola.',
      elements: [

      ],
  },
  {
    seconds: 40,
    title: 'Viral RNA release',
    description:
      'Once fusion of the virus and the host cell has occurred, the viral genome is released directly into the cytoplasms of the host cell. The virus has now reached its first big milestone and can start the process of  multiplication. ',
      elements: [
        {
          element: covid19,
          x: 354,
          y: 353,
          rotation: 236,
          scale: 1,
        },
        {
          element: rna,
          x: 354,
          y: 353,
          rotation: 236,
          scale: 1,
        },
      ],
  },
  {
    seconds: 45,
    title: 'RNA Replication',
    description:
      'The viral RNA is now in the cytoplasms of the host cell and can start to replicate. Goal is to produce its 27 different structural proteins that are needed to assemble a new virus - not only one but several thousand. To do so, first the genetic information of the virus has to be replicated. In an initial step the virus borrows parts of the host replication machinery until it has made all necessary tools that allows to replicate its genomic information on its own.',
    elements: [
      {
        element: rna,
        x: 278,
        y: 274,
        rotation: 236,
        scale: 1,
      },
      {
        element: covid19,
        x: 354,
        y: 353,
        rotation: 236,
        scale: 1,
        status: 'hidden',
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
  keyframe: Keyframe
}

class App extends Component<Props, State> {
  state: Readonly<State> = {
    keyframe: keyframes[0],
  }

  keyframeUpdated = (keyframe: Keyframe) => {
    this.setState({
      keyframe,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="stage">
          <div className="scene">
            {covid19.render()}
            {rna.render()}
            <Cell />
          </div>
        </div>
        <div className="sidebar">
          <Logo />
          <div className="info-box">
            <h4 className="subtitle">{this.state.keyframe.title}</h4>
            <p>{this.state.keyframe.description}</p>
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
