import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {


    return (
        <header className="encabezado">
            <Link to={"/"}><h1>LOGO</h1></Link>
            

            <nav>
                <Link className="mx-1" to={"/"}>Inicio</Link>
                <Link className="mx-1" to={"/category/gas-pimienta"}>Gas pimienta</Link>
                <Link className="mx-1" to={"/category/llavero"}>Kubotan</Link>
                <Link className="mx-1" to={"/category/llavero"}>Llavero</Link>
            </nav>

            <CartWidget/>

        </header>
    )
  
}
