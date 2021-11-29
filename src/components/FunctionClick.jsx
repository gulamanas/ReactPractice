import React from 'react'

function FunctionClick() {
    function handleEvent() {
        console.log("Button Clicked");
    }

    return (
        <div>
            <button onClick={handleEvent}>Click</button>
        </div>
    )
}

export default FunctionClick
