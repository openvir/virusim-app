import React, { Component } from 'react';

type State = {
    scale: number,
}

class Stage extends Component {

    state: Readonly<State> = {
        scale: 1,
    }

    stage = {
        el: document.getElementById("stage"),
        wrapper: document.getElementById("stage-wrapper"),
        simulationContainer: document.getElementById("simulationContainer"),
        scale: 1,
        width: 800,
        height: 600,
        aspectRatio: 1,
        aspectClass: 'landscape'
    }

    updateScale() {
        // calc the scale of the stage
        this.stage.scale = Math.min(
            this.stage.wrapper!.offsetWidth / this.stage.width,
            this.stage.wrapper!.offsetHeight / this.stage.height
        );
        this.setState({ scale: this.stage.scale })
        
        // calc ascpect ration and toggle between classes
        this.stage.aspectRatio = this.stage.wrapper!.offsetWidth / this.stage.wrapper!.offsetHeight
        this.stage.simulationContainer?.classList.remove(this.stage.aspectClass)
        this.stage.aspectClass =  this.stage.aspectRatio > 1 ? 'landscape': 'portrait'
        this.stage.simulationContainer?.classList.add(this.stage.aspectClass)
    }

    componentDidMount(): void {
        this.stage.wrapper = document.getElementById("stage-wrapper")
        this.stage.el = document.getElementById("stage")
        this.stage.simulationContainer = document.getElementById("simulationContainer")
        this.stage.width = this.stage.el!.offsetWidth
        this.stage.height = this.stage.el!.offsetHeight
        this.updateScale()
        window.addEventListener("resize", this.updateScale.bind(this))
    }

    render() {
        return (
            <div id="stage-wrapper" className="stage-wrapper">
                <div className="stage" id="stage" style={{ transform: 'translate(-50%, -50%) scale(' + this.state.scale + ')' }}>
                    <div className="scene">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Stage