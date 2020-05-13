import React, { Component } from 'react'
import './styles/index.scss'

import Logo from './components/Logo'
import Virus from './components/Virus'
import Cell from './components/Cell'
import Invasion from './components/Invasion'
import Timeline from './components/Timeline'
import Zoom from './components/Zoom'
import Scene from './components/Scene'
import Stage from './components/Stage'
import Fullscreen from './components/Fullscreen'
import Sidebar from './components/Sidebar'

import { Keyframe } from './models/Keyframe'
import Rna from './components/Rna'
import { RibosomeAnimations } from './components/'
import { RnaAnimations } from './components/RnaAnimations'
import Homepage from './pages/homepage'

const covid19 = new Virus('covid19')
const rna = new RnaAnimations()
const ribosome = new RibosomeAnimations()
const scene = new Scene('')
const invasion = new Invasion('')

const keyframes: Array<Keyframe> = [
  {
    seconds: 0,
    title: 'Virus SARS-CoV-2 –  What is it made of?',
    mark: 'The Virus',
    description:
      'At its core we find the genetic information stored in the form of a single-strand RNA. To protect the genome, the RNA strand is bound to a protein and both build a helical nucleocapsid.\n\n' +
      'An outer lipid envelope surrounds the inner nucleocapsid; matrix proteins connect the two structures.\n\n' +
      'On the surface of the virus many crown-like spikes stick out. Those are essential  for entering and infecting the host cell and give the virus family its name: Coronaviridae',
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
        x: -150,
        y: -250,
        rotation: 0,
        scale: 0.8,
      },
    ],
  },
  {
    seconds: 10,
    title: 'The Target of the Virus - Cells in Our Lungs',
    mark: 'Lung Cells',
    description:
      'Once a droplet with viruses has entered our respiratory system, it travels deep down into our lung where the alveoli sit. These are responsible for the exchange of oxygen and carbon dioxide to and from the bloodstream. Cells that make up the alveoli happen to have a marker on their surface, named ACE-2 or angiotensin-converting enzyme 2.',
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
        x: -150,
        y: -250,
        rotation: 0,
        scale: 0.8,
      },
    ],
  },
  {
    seconds: 20,
    title: 'Entry Mechanism - A Key and Its Lock',
    mark: 'Open',
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
        x: 79,
        y: -310,
        rotation: 0,
        scale: 1.7,
      },
    ],
  },
  {
    seconds: 30,
    title: 'Fusion of Cell and Virus',
    mark: 'Fusion',
    description:
      'When the spike protein of the virus binds to the ACE-2 receptor, “a door opens” and the virus is able to enter the cell. This process is called “fusion” and requires the plasma membrane of the host cell and the viral membrane to merge.',
    elements: [],
  },
  {
    seconds: 40,
    title: 'Milestone - Virus Releases its RNA',
    mark: 'RNA Release',
    description:
      'Once fusion of the virus and the host cell has occurred, the viral genome is released directly into the cytoplasms of the host cell. The virus has now reached its first big milestone and can start the process of multiplication.',
    elements: [
      {
        element: covid19,
        x: 354,
        y: 353,
        rotation: 236,
        scale: 1,
        status: 'visible',
      },
      {
        element: rna,
        x: 354,
        y: 353,
        rotation: 236,
        scale: 1,
        status: 'visible',
      },
    ],
  },
  {
    seconds: 50,
    title: 'RNA Replication',
    mark: 'RNA Replication',
    description:
      'The viral RNA has made it into the cytoplasms of the host cell functioning as the blueprint for making thousands and thousands of more viruses. In an initial step, the virus borrows parts of the host’s replication machinery until it has made all necessary tools that allows it to be independent. Then it starts replicating its genomic information that code for the structural components needed to make new viruses.',
    elements: [
      {
        element: rna,
        x: 278,
        y: 274,
        rotation: 236,
        scale: 1,
        // status: 'stopIdle',
      },
      {
        element: covid19,
        x: 354,
        y: 353,
        rotation: 236,
        scale: 1,
        status: 'hidden',
      },
      {
        element: scene,
        x: 79,
        y: -51,
        rotation: 0,
        scale: 1.7,
      },
      {
        element: ribosome,
        status: 'replicate',
      },
    ],
  },
  {
    seconds: 60,
    title: 'Translation - From Genetic Code to Actual Protein',
    mark: 'Translation',
    description:
      'Once the genetic information is replicated it has to be translated into the actual structural proteins that make up the virus, like the spike, envelope, matrix and nucleocapsid proteins. This process happens in the cytoplasm or the endoplasmic reticulum of the host cell.',
    elements: [],
  },
  {
    seconds: 70,
    title: 'Assembly of the New Viruses',
    mark: 'Assembly',
    description:
      'New structural viral proteins have been manufactured in the endoplasmic reticulum while new viral RNA and nucleocapsid proteins were made in the cytoplasm of the host. All parts are now assembled and a new mature viron is formed.',
    elements: [],
  },
  {
    seconds: 80,
    title: 'Exocytosis - Release',
    mark: 'Release',
    description:
      'In a process called exocytosis, many newly build virons exit the host cell.',
    elements: [
      {
        element: scene,
        x: 112,
        y: -25,
        rotation: 0,
        scale: 0.4,
      },
      {
        element: invasion,
        x: 354,
        y: 353,
        rotation: 0,
        scale: 1,
        status: 'visible',
      },
    ],
  },
  {
    seconds: 90,
    title: 'Invasion',
    mark: 'Invasion',
    description:
      'Now thousands and thousand of more viruses have been made. They leave through the host’s respiratory system through sneezing or coughing – ready to infect new hosts.',
    elements: [
      {
        element: invasion,
        x: 354,
        y: 353,
        rotation: 0,
        scale: 1,
        status: 'visible',
      },
    ],
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

  componentDidMount(): void {
    rna.idle()
  }

  render() {
    return (
      <div className="App">
        <Homepage>
          <Logo />
          <Stage>
            <Virus />
            <Rna />
            <Cell />
            {/*<Ribosome />*/}
            <Invasion />
          </Stage>
          <Sidebar>
            <h4 className="subtitle">{this.state.keyframe.title}</h4>
            <div className="description">
              <p>{this.state.keyframe.description}</p>
            </div>
          </Sidebar>
          <div className="sidebar-tools">
            <Fullscreen element={'simulationContainer'} />
            <Zoom />
          </div>
          <div className="bottombar">
            <Timeline
              keyframes={keyframes}
              onKeyframeUpdated={this.keyframeUpdated}
            />
          </div>
        </Homepage>
      </div>
    )
  }
}

export default App
