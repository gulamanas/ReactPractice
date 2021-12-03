import React from 'react'

function Person({ person }) {
    return (
        <div>
            {/* passing person as a props */}
            <h2> I am {person.name}. My age is {person.age} years old. I am skilled in {person.skill} </h2>
        </div>
    )
}

export default Person
