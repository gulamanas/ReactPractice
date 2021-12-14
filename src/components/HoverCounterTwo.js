import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        const { count, clickHandler } = this.props
        return (
            <h1 onMouseEnter={clickHandler}>Hover {count} times</h1>
        )
    }
}

export default HoverCounterTwo
