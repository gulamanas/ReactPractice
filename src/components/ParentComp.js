import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Anas'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'Anas'
            })
        }, 2000);
    }

    render() {
        return (
            <div>
                Parent Component
                <PureComp />
                <RegComp />
            </div>
        )
    }
}

export default ParentComp
