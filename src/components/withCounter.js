import React from 'react'

const withCounter = (WrappedComponent, countNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        countHandler = () => {
            this.setState(prevState => {
                return { count: prevState.count + countNumber }
            })
        }

        render() {
            return <WrappedComponent count={this.state.count} countHandler={this.countHandler} {...this.props} />
        }
    }
    return WithCounter
}

export default withCounter