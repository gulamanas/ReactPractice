import React, { Component } from 'react'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Jayaprakash'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                LifecycleA
            </div>
        )
    }
}

export default LifeCycleA
