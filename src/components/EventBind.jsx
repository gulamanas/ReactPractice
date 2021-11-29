import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello Anas!'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Welcome to my site'
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState({
            message: 'Welcome to my site'
        })
        console.log(this);
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Replace</button> */}
                {/* <button onClick={() => this.clickHandler()}>Replace</button> */}
                <button onClick={this.clickHandler}>Replace</button>
            </div>
        )
    }
}

export default EventBind
