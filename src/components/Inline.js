import React from 'react'

function Inline() {
    const inlineStyling = {
        color: 'blue',
        fontSize: '72px'
    }

    return (
        <div>
            <h1 style={inlineStyling}>Inline Styling</h1>
        </div>
    )
}

export default Inline