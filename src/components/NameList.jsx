import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Stark', 'Thor', 'Rogers', 'Banner', 'Aas', 'Hussain']
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Stark',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Thor',
    //         age: 28,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Rogers',
    //         age: 25,
    //         skill: 'Vue'
    //     },
    //     {
    //         id: 4,
    //         name: 'Banner',
    //         age: 32,
    //         skill: 'Svelte'
    //     },
    // ]

    // const nameList = names.map(name => <h2>{name}</h2>)
    // const personList = persons.map(person => <h2> I am {person.name}. My age is {person.age} years old. I am skilled in {person.skill} </h2>)
    // const nameList = names.map((name, index) => <Person key={index} index={index} name={name} />)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {/* {personList} */}
            {/* {
                names.map(name => <h2>{name}</h2>)
            } */}
            {nameList}
        </div>
    )
}

export default NameList
