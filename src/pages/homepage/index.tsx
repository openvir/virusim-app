import React from 'react'
import './styles/index.scss'

import { ReactComponent as LogoSVG } from './assets/logo.svg'
import userImage from './assets/001-user.png'
import stethoscopeImage from './assets/002-stethoscope.png'
import scientistImage from './assets/006-scientist.png'
import dataScientistImage from './assets/005-data-scientist.png'
import analysisImage from './assets/004-analysis.png'
import virusImage from './assets/Virus-erglaeransicht@2x.png'
import cellImage from './assets/zelle-einzeln_erklaeransicht@2x.png'

import dominikImage from './assets/Dominik.jpg'
import claudiaImage from './assets/Claudia.jpg'
import benjaminImage from './assets/Benjamin.jpg'
import kathiImage from './assets/Kathi.jpg'
import fabianImage from './assets/Fabian.jpg'

const Homepage: React.FC = (props) => {
  return (
    <>
      <header id="banner">
        <div className="logoContainer">
          <LogoSVG className="homeLogo" />
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
        <div id="fourthSection" className="section">
          <div className="wrapper">
            <div className="col col-50">
              <div className="col inner-col-50 row alignCenter">
                <img src={cellImage} alt="user" />
                <h3 className="headline">Lungenzelle</h3>
              </div>
            </div>
            <div className="col col-50">
              <div className="col inner-col-50 row alignCenter">
                <img src={virusImage} alt="user" />
                <h3 className="headline">COVIC-19-Virus</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="simulationContainer">{props.children}</div>
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
        <div id="teamSection" className="section">
          <div className="wrapper">
            <div className="col col-33">
              <h3 className="headline">
                Das Team hinter der Idee mit dem Visuellen Virus-Simulator
              </h3>
              <p className="introText">
                Die Kommunikation von biologischem Fachwissen stößt an seine
                Grenzen. Da es für fachfremde Personen oft schwer
                nachzuvollziehen ist, sind Missverständnisse und
                Informationslücken die Folge. Die Kommunikation von biologischem
                Fachwissen stößt an seine Grenzen. Da es für fachfremde Personen
                oft schwer nachzuvollziehen ist, sind Missverständnisse und
                Informationslücken die Folge. Informationslücken die Folge.
                Informationslücken die Folge.
              </p>
            </div>
            <div className="col col-33">
              <img
                src={dominikImage}
                alt="user"
                className="personImage dominik"
              />
              <div className="infoBox">
                <h4>Dominik, Rolle im Team</h4>
                <p>
                  Dominik initiated the project ViruSim because he wanted to
                  take action fighting the current crisis. At the same time, he
                  wanted to understand more about what actually happens inside
                  our body when we get infected with a virus and what we can do
                  about it.
                </p>
              </div>
            </div>
            <div className="col col-33">
              <img src={claudiaImage} alt="user" className="personImage" />
              <div className="infoBox">
                <h4>Claudia, Rolle im Team</h4>
                <p>
                  Claudia is an entrepreneur holding a PhD in Immunology. She is
                  often startled how little is known about life sciences. With
                  ViruSim, she wants to help making science enjoyable and easy
                  to understand for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="col col-33">
              <img src={benjaminImage} alt="user" className="personImage" />
              <div className="infoBox">
                <h4>Benjamin, Rolle im Team</h4>
                <p>
                  Die Kommunikation von biologischem Fachwissen stößt an seine
                  Grenzen. Da es für fachfremde Personen oft schwer
                  nachzuvollziehen ist, sind Missverständnisse und
                  Informationslücken die Folge. Informationslücken die Folge.
                </p>
              </div>
            </div>
            <div className="col col-33">
              <img src={kathiImage} alt="user" className="personImage kathi" />
              <div className="infoBox">
                <h4>Kathi, Rolle im Team</h4>
                <p>
                  Die Kommunikation von biologischem Fachwissen stößt an seine
                  Grenzen. Da es für fachfremde Personen oft schwer
                  nachzuvollziehen ist, sind Missverständnisse und
                  Informationslücken die Folge. Informationslücken die Folge.
                </p>
              </div>
            </div>
            <div className="col col-33">
              <img src={fabianImage} alt="user" className="personImage" />
              <div className="infoBox">
                <h4>Fabian, Rolle im Team</h4>
                <p>
                  The world is fast moving - especially in the times of Corona.
                  As a software developer I would like to contribute in a great
                  team to make the mass of information accessible and
                  understandable for all people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Homepage
