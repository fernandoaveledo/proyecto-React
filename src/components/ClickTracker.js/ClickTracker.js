import React, {useState} from 'react'

export const ClickTracker =() => {

    const [contador, setContador] = useState(0)

    const handleClick = () => {
        setContador
    }

    return (

        <div>
            <h2>Click tracker</h2>
            <hr/>

        <p>clicks: {contador}</p>
        </div>
    )





}