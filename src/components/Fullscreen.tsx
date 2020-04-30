import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'
import './../styles/fullscreen.scss'

type Props = {
    element: string
}

type State = {
    supported: boolean,
}

class Fullscreen extends Component<Props> {

    state: Readonly<State> = {
        supported: false,
    }

    stage = document.getElementById(this.props.element)

    componentDidMount() {
        if(document.fullscreenEnabled){
            this.setState({ supported: true })
            this.stage = document.getElementById(this.props.element)
        } else {
            console.log('fullscreen not suported')
            this.setState({ supported: false })
        }
    }

    enterFullscreen() {
        if (this.stage) this.stage.requestFullscreen()
    }

    exitFullscreen() {
        document.exitFullscreen();
    }

    render() {
        return (
            <div className="fullscreen" style={{display: this.state.supported ? "inherit" : "none"}}>
                <span className="enter-fullscreen">
                    <FontAwesomeIcon
                        onClick={this.enterFullscreen.bind(this)}
                        icon={faExpand} />
                </span>
                <span className="exit-fullscreen"><FontAwesomeIcon
                    onClick={this.exitFullscreen.bind(this)}
                    icon={faCompress} /></span>
            </div>
        )
    }
}

export default Fullscreen
