import React, { Component } from 'react';
import anime from 'animejs'

const sceneClass = '.scene';

class Zoom extends Component {

    render() {
        return (
            <div className="zoom">
                <button onClick={this.zoomIn}>+</button>
                <button onClick={this.zoomReset}>reset</button>
                <button onClick={this.zoomOut}>-</button>
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