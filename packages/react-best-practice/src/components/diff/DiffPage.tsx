import React, { FC, ReactElement, useEffect, useState } from 'react'

interface Person {
    id: number,
    name: string,
    age: number
}

const DiffPage: FC = (): ReactElement => {
    const [dataValue, setDataValue] = useState(new Date())
    const [personList, setPersonList] = useState([
        { id: 1, name: 'Alex', age: 18 },
        { id: 2, name: 'Allen', age: 19 },
    ])

    useEffect(() => {
        setInterval(() => setDataValue(new Date()), 1000)
    }, [])

    const addOne = () => {
        const person: Person = { id: personList.length + 1, name: `people ${personList.length}`, age: 20 + personList.length }
        setPersonList([person, ...personList])
    }

    return (
        <div>
            <div className='diff'>
                <h2>hello</h2>
                <input type="text" />
                <span>
                    now:{dataValue.toTimeString()}
                    <input type="text" />
                </span>
            </div>
            <div className='key'>
                <h2>Person Information List</h2>
                <button onClick={addOne}>Add one people</button>
                <h3>using index as key</h3>
                <ul>
                    {
                        personList.map((personObj: Person, index: number) => {
                            return <li key={index}>{personObj.name}---{personObj.age}<input type="text" /></li>
                        })
                    }
                </ul>
                <hr />
                <hr />
                <h3>using id as key</h3>
                <ul>
                    {
                        personList.map((personObj: Person) => {
                            return <li key={personObj.id}>{personObj.name}---{personObj.age}<input type="text" /></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

export default DiffPage;
