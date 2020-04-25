import React, { Component } from 'react';
import anime from 'animejs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, faSearchMinus, faRedo } from '@fortawesome/free-solid-svg-icons'

const sceneClass = '.scene';

class Zoom extends Component {

    render() {
        return (
            <div className="zoom">
                <span onClick={this.zoomIn}><FontAwesomeIcon icon={faSearchPlus} /></span>
                <span onClick={this.zoomOut}><FontAwesomeIcon icon={faSearchMinus} /></span>
                <span onClick={this.zoomReset}>reset</span>
            </div>
        )
    }

    zoomIn() {
        anime({
            targets: sceneClass,
            duration: 4000,
            scale: '+=0.3',
            direction: 'forward',
            easing: 'easeOutElastic(1, .8)',
            loop: false
        });
    }

    zoomOut() {
        anime({
            targets: sceneClass,
            duration: 4000,
            scale: '-=0.3',
            direction: 'forward',
            easing: 'easeOutElastic(1, .8)',
            loop: false
        });
    }

    zoomReset() {
        anime({
            targets: sceneClass,
            duration: 4000,
            scale: 1,
            direction: 'forward',
            easing: 'easeOutElastic(1, .8)',
            loop: false
        });
    }
}

export default Zoom