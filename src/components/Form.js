import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            message: '',
            topic: 'react'
        }
    }

    handleUsername = event => {
        this.setState({
            username: event.target.value
        })
    }
    handleMessage = event => {
        this.setState({
            message: event.target.value
        })
    }
    handleTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.message} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsername} />
                </div>
                <div>
                    <label>Message</label>
                    <textarea value={this.state.message} onChange={this.handleMessage}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
