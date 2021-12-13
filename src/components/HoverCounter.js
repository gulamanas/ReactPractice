import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    countHandler = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1 onMouseEnter={this.countHandler}>{this.props.name} Hover {count} times</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
