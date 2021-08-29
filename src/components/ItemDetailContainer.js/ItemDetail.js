import React from 'react'

export const ItemDetail = ({category, id, nombre, desc, img, precio}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>Precio: {precio}</p>
            <img src={img} alt={nombre}/>
            <p></p>
        </div>
    )
}
