import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'
import './../styles/fullscreen.scss'

type Props = {
    element: string
}

class Fullscreen extends Component<Props> {

    stage = document.getElementById(this.props.element)

    componentDidMount() {
        this.stage = document.getElementById(this.props.element)
    }

    enterFullscreen() {
        if (this.stage) this.enterFullscreenApi(this.stage)
    }

    exitFullscreen() {
        this.exitFullscreenApi()
    }

    // TODO: Fullscreen for or browsers or check if babel.js convert this correctly
    enterFullscreenApi(element: Element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    }

    exitFullscreenApi() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    render() {
        return (
            <div className="fullscreen">
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
