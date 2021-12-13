import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

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

export default UpdatedComponent(HoverCounter)
