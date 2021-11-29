import React, { Component } from 'react'

class ClassClick extends Component {

    handleEvent() {
        console.log('Button has been Clicked');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleEvent}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
