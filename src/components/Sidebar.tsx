import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

type State = {
    toggleOpen: boolean
}

class Sidebar extends Component {
    state: Readonly<State> = {
        toggleOpen: false,
    }

    toggleDescription() {
        this.setState({ toggleOpen: !this.state.toggleOpen, })
    }

    hideDescription() {
        this.setState({ toggleOpen: false, })
    }

    render() {
        return (
            <div className={'sidebar ' + (this.state.toggleOpen ? 'toggle-open' : '')}>
                <div className="info-box" onClick={this.toggleDescription.bind(this)} >
                    {this.props.children}
                    <span className="mobile drowdown-arrow"><FontAwesomeIcon icon={faSortDown} /></span>
                </div>
            </div>
        )
    }
}

export default Sidebar