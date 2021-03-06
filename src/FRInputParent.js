import React, { Component } from 'react'
import FRInput from './FRInput'

class FRInputParent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    handleFocus = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.handleFocus}>Focus Input</button>
            </div>
        )
    }
}

export default FRInputParent
