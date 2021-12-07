import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Jayaprakash'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                <h1>Lifecycle B</h1>
            </div>
        )
    }
}

export default LifeCycleB
