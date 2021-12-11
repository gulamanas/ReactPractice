import React, { Component } from 'react'
import Input from './Input'

class InputParent extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    handleFocus = () => {
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.handleFocus}>Focus Input</button>
            </div>
        )
    }
}

export default InputParent
