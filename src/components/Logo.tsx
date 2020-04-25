import React, { Component } from 'react'
import { ReactComponent as LogoSVG } from './../svg/logo.svg'

class Logo extends Component {

    render() {
        return (
            <div className="logo">
                <LogoSVG />
            </div>
        )
    }
}

export default Logo