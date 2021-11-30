import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    // Note: Do not use more than one render method in a single component this is just an example for multiple method for conditonal rendering

    // Short Circuit operator

    render() {
        return this.state.isLoggedIn && <div>Welcome Anas</div>
    }

    // Using ternary operator

    render() {
        return this.state.isLoggedIn ?
            <div>Welcome Anas</div> :
            <div>Welcome Guest</div>
    }

    // Defining variable for conditonal rendering

    render() {
        let message;
        if (this.state.isLoggedIn) {
            message = <div>Welcome Anas</div>
        } else {
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div>
    }

    // Using if else conditonal rendering

    render() {
        if (this.state.isLoggedIn) {
            return <div>Welcome Anas</div>
        } else {
            return <div>Welcome Guest</div>
        }
    }

    // No conditional rendering

    render() {
        return (
            <div>
                <div>Welcome Anas</div>
                <div>Welcome Guest</div>
            </div>
        )
    }
}

export default UserGreeting
