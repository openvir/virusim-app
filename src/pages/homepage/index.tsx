import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import './styles/index.scss'

import { ReactComponent as LogoSVG } from './assets/logo.svg'
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
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Homepage: React.FC = (props) => {
  return (
    <>
      <header id="banner">
        <div className="logoContainer">
          <LogoSVG className="homeLogo" />
        </div>
        <div className="content">
          <h2>Virology Made Easy</h2>
          <h3>An Interactive Tool for Visualizing SARS-CoV-2 Infections</h3>
          <div className="infoBox">
            <p>
              Science is fascinating. Unfortunately, the biological processes in
              our bodies are complex and hard to understand leaving many of us
              misinformed. This interactive and fun tool helps you discover the
              world of virology so you can learn and make informed decisions
              that protect you and others.
            </p>
          </div>
        </div>

        <div id="decorationVirus1" />
        <div id="decorationVirus2" />
        <div className="scrollDown">
          <button
            onClick={() => {
              if (document) {
                const x = document.getElementById('simulationContainer')
                if (x) {
                  x.scrollIntoView()
                }
              }
            }}
          />
        </div>
      </header>

      <main>
        <div id="thirdSection" className="section">
          <div className="wrapper">
            <div className="col col-50">
              <h3 className="headline">
                Start now and discover how SARS-CoV-2 infects the cells deep
                down in the lung
              </h3>
            </div>
            <div className="col col-50">
              <p>
                The Coronavirus has been able to spread around the world causing
                a global pandemic. Learn how it multiplies in our bodies by
                scrolling through the timeline describing each step along the
                way.
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
                <h3 className="headline">Lung Cell</h3>
              </div>
            </div>
            <div className="col col-50">
              <div className="col inner-col-50 row alignCenter">
                <img src={virusImage} alt="user" />
                <h3 className="headline">SARS-CoV-2</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="simulationContainer">{props.children}</div>
        {/*<div id="firstSection" className="section">*/}
        {/*  <div className="wrapper">*/}
        {/*    <div className="col col-50">*/}
        {/*      <h3 className="headline">*/}
        {/*        Wie entsteht der Spalt zwischen Allgemeinheit und Experten?*/}
        {/*      </h3>*/}
        {/*      <p>*/}
        {/*        Die Kommunikation von biologischem Fachwissen stößt an seine*/}
        {/*        Grenzen. Da es für fachfremde Personen oft schwer*/}
        {/*        nachzuvollziehen ist, sind Missverständnisse und*/}
        {/*        Informationslücken die Folge. Wir wollen das ändern - mit Hilfe*/}
        {/*        interaktiver Virus-Simulation. Die Kommunikation von*/}
        {/*        biologischem Fachwissen stößt an seine Grenzen. Da es für*/}
        {/*        fachfremde Personen oft schwer nachzuvollziehen ist, sind*/}
        {/*        Missverständnisse und Informationslücken die Folge. Wir wollen*/}
        {/*        das ändern - mit Hilfe interaktiver Virus-Simulation.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="col col-50 row">*/}
        {/*      <div className="col inner-col-50">*/}
        {/*        <img src={userImage} alt="user" />*/}
        {/*        <div className="infoBox">*/}
        {/*          <p>*/}
        {/*            Die Kommunikation von biologischem Fachwissen stößt an seine*/}
        {/*            Grenzen. Da es für fachfremde Personen oft schwer*/}
        {/*            nachzuvollziehen ist, sind Missverständnisse und*/}
        {/*            Informationslücken die Folge.*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col inner-col-50">*/}
        {/*        <img src={stethoscopeImage} alt="user" />*/}
        {/*        <div className="infoBox">*/}
        {/*          <p>*/}
        {/*            Die Kommunikation von biologischem Fachwissen stößt an seine*/}
        {/*            Grenzen. Da es für fachfremde Personen oft schwer*/}
        {/*            nachzuvollziehen ist, sind Missverständnisse und*/}
        {/*            Informationslücken die Folge.*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <hr />
        <div id="secondSection" className="section">
          <div className="wrapper">
            <h3 className="headline">What does ViruSim offer?</h3>
          </div>
          <div className="wrapper">
            <div className="col col-33 box blue-box">
              <img src={scientistImage} alt="user" />
              <p>
                A joint venture of scientists, software developers and designers
                providing you expert knowledge combined with user-friendly
                interactivity.
              </p>
            </div>
            <div className="col col-33 box red-box">
              <img src={analysisImage} alt="user" />
              <p>
                Developed for everyone who wants to discover the world of
                virology in a fun and easy way; independent of age and
                educational level.
              </p>
            </div>
            <div className="col col-33 box green-box">
              <img src={dataScientistImage} alt="user" />
              <p>
                Open source project with API, ready to integrate in any other
                website.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div id="teamSection" className="section">
          <div className="wrapper">
            <div className="col col-33">
              <h3 className="headline">The Team Behind VirusSim</h3>
              <p className="introText">
                The team of five was brought together by the European Union's
                EUvsVirus hackathon. With their multidisciplinary skill set and
                fast approach they were able to bring Dominik’s vision of an
                interactive and easy-to-use virus simulator to life. Each one of
                them hopes this contribution can help fight the current pandemic
                through education.
              </p>
            </div>
            <div className="col col-33">
              <img
                src={dominikImage}
                alt="user"
                className="personImage dominik"
              />
              <div className="infoBox">
                <h4>
                  Dominik, Developer
                  <a
                    style={{ float: 'right' }}
                    href="https://www.linkedin.com/in/dominikgrusemann/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </h4>
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
                <h4>
                  Claudia, Scientist
                  <a
                    style={{ float: 'right' }}
                    href="https://www.linkedin.com/in/cloudfactor/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </h4>
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
                <h4>
                  Benjamin, Developer
                  <a
                    style={{ float: 'right' }}
                    href="https://www.linkedin.com/in/benjamin-albrecht-6607523a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </h4>
                <p>
                  Ben is a Frontend/Web Dev joined the team to help teaching
                  about covid19 and other viruses. He helped developing the
                  prototype.
                </p>
              </div>
            </div>
            <div className="col col-33">
              <img src={kathiImage} alt="user" className="personImage kathi" />
              <div className="infoBox">
                <h4>
                  Kathi, Designer
                  <a
                    style={{ float: 'right' }}
                    href="https://www.linkedin.com/in/katharina-gollnow-208033b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </h4>
                <p>
                  As Designer it brings me joy to set complexe themes inside a
                  good information strategy and make them easy to understand and
                  also pleasing to the eye.
                </p>
              </div>
            </div>
            <div className="col col-33">
              <img src={fabianImage} alt="user" className="personImage" />
              <div className="infoBox">
                <h4>
                  Fabian, Developer
                  <a
                    style={{ float: 'right' }}
                    href="https://www.linkedin.com/in/fabian-wermerskirch-6a520615b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </h4>
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
        <div id="mailchimpSection" className="section">
          <h3>Subscribe to our newsletter</h3>
          <p>Receive updates about ViruSim and research about SARS-CoV-2.</p>
          <div className="mailchimpForm">
            <MailchimpSubscribe
              url={
                'https://virusim.us8.list-manage.com/subscribe/post?u=aaf871f49da627217326f2630&amp;id=606669db37'
              }
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Homepage
