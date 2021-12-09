import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp';
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
        setInterval(() => {
            this.setState({
                name: 'Anas'
            })
        }, 2000);
    }

    render() {
        console.log('**********************************Parent Comp render**************************************')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <PureComp name={this.state.name} />
                <RegComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
