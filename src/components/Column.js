import React from 'react'

function Column() {
    return (
        // You can either add React.Fragment or you can left it as it is
        // The only prolem will be you cannot be able to add key attribute
        <>
            <td>Hello</td>
            <td>Someone</td>
        </>
    )
}

export default Column