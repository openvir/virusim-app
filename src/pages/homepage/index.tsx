import React, { useState } from 'react'
import './styles/index.scss'

import { ReactComponent as LogoSVG } from './assets/logo.svg'
import userImage from './assets/001-user.png'
import stethoscopeImage from './assets/002-stethoscope.png'
import scientistImage from './assets/006-scientist.png'
import dataScientistImage from './assets/005-data-scientist.png'
import analysisImage from './assets/004-analysis.png'

const Homepage: React.FC = (props) => {
  return (
    <>
      <header id="banner">
        <div className="logoContainer">
          <LogoSVG className="logo" />
        </div>
        <div className="content">
          <h2>Virologie in einfach und interaktiv für Wissbegierige</h2>
          <h3>Virale Vorgänge visuell simuliert</h3>
          <div className="infoBox">
            <p>
              Die Kommunikation von biologischem Fachwissen stößt an seine
              Grenzen. Da es für fachfremde Personen oft schwer nachzuvollziehen
              ist, sind Missverständnisse und Informationslücken die Folge. Wir
              wollen das ändern - mit Hilfe interaktiver Virus-Simulation.
            </p>
          </div>
        </div>

        <div id="decorationVirus1"></div>
        <div id="decorationVirus2"></div>
        <div className="scrollDown">
          <button></button>
        </div>
      </header>

      <main>
        <div id="firstSection" className="section">
          <div className="wrapper">
            <div className="col col-50">
              <h3 className="headline">
                Wie entsteht der Spalt zwischen Allgemeinheit und Experten?
              </h3>
              <p>
                Die Kommunikation von biologischem Fachwissen stößt an seine
                Grenzen. Da es für fachfremde Personen oft schwer
                nachzuvollziehen ist, sind Missverständnisse und
                Informationslücken die Folge. Wir wollen das ändern - mit Hilfe
                interaktiver Virus-Simulation. Die Kommunikation von
                biologischem Fachwissen stößt an seine Grenzen. Da es für
                fachfremde Personen oft schwer nachzuvollziehen ist, sind
                Missverständnisse und Informationslücken die Folge. Wir wollen
                das ändern - mit Hilfe interaktiver Virus-Simulation.
              </p>
            </div>
            <div className="col col-50 row">
              <div className="col inner-col-50">
                <img src={userImage} alt="user" />
                <div className="infoBox">
                  <p>
                    Die Kommunikation von biologischem Fachwissen stößt an seine
                    Grenzen. Da es für fachfremde Personen oft schwer
                    nachzuvollziehen ist, sind Missverständnisse und
                    Informationslücken die Folge.
                  </p>
                </div>
              </div>
              <div className="col inner-col-50">
                <img src={stethoscopeImage} alt="user" />
                <div className="infoBox">
                  <p>
                    Die Kommunikation von biologischem Fachwissen stößt an seine
                    Grenzen. Da es für fachfremde Personen oft schwer
                    nachzuvollziehen ist, sind Missverständnisse und
                    Informationslücken die Folge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div id="secondSection" className="section">
          <div className="wrapper">
            <h3 className="headline">
              Welche Lösung bietet die visuelle Simulation von ViruSim?
            </h3>
          </div>
          <div className="wrapper">
            <div className="col col-33 box blue-box">
              <img src={scientistImage} alt="user" />
              <p>
                Von Virologen und Software-Entwicklern gemeinsam entwickelt.
                Fachwissen kombiniert mit nutzerfreundlicher Interaktivität.
              </p>
            </div>
            <div className="col col-33 box red-box">
              <img src={analysisImage} alt="user" />
              <p>
                Für jede Altersgruppe geeignetes Fachwissen spielerisch ohne
                großen Zeitaufwand oder Vorwissen aneignen.
              </p>
            </div>
            <div className="col col-33 box green-box">
              <img src={dataScientistImage} alt="user" />
              <p>
                Als Open Soure Projekt via API einfach auf die eigene Website
                einzubinden, um zu einem Teiler des Wissens für alle zu werden.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div id="thirdSection" className="section">
          <div className="wrapper">
            <div className="col col-50">
              <h3 className="headline">
                Erkunden Sie das Geschehen und greifen Sie in die Simulation ein
              </h3>
            </div>
            <div className="col col-50">
              <p>
                Die Kommunikation von biologischem Fachwissen stößt an seine
                Grenzen. Da es für fachfremde Personen oft schwer
                nachzuvollziehen ist, sind Missverständnisse und
                Informationslücken die Folge.
              </p>
            </div>
          </div>
        </div>
        <hr />
      </main>
    </>
  )
}

export default Homepage
