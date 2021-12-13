import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    render() {
        const { count, countHandler } = this.props
        return (
            <div>
                <h1 onMouseEnter={countHandler}>Hover {count} times</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter)
