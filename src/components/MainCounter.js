import React, { Component } from 'react'

class MainCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.clickHandler)}
            </div>
        )
    }
}

export default MainCounter
