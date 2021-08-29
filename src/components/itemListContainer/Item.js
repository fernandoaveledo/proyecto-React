import React from 'react'
import {Link} from 'react-router-dom'

export const Item = ({item}) => {

    console.log(item);

    return (
        <div className="card col-4">
            <img src={item.img} alt={item.nombre}></img>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.precio}</p>
            <Link to={`/detail/gas-pimienta`} className="btn btn-outline-primaryLink"> Mostrar producto</Link>
    </div>
    )
}
