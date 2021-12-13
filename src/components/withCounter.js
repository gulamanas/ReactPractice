import React from 'react'

const updatedComponent = originalComponent => {
    class NewComponent extends React.Component {
        render() {
            return <originalComponent />
        }
    }
    return NewComponent
}

export default updatedComponent