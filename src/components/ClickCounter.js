import React, { Component } from 'react'
import withCounter from './withCounter'

export class ClickCounter extends Component {


    render() {
        const { count, countHandler } = this.props
        return (
            <div>
                <button onClick={countHandler}>{this.props.name} Click {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)
