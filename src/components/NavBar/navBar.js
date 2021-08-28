import {CartWidget} from './CartWidget/CartWidget'
export    const NavBar = () => {
    return (
        <header className="navbar">
            <h1>LOGO</h1>
        <nav>
            <a className="espacio" href="#">enlace</a>
            <a className="espacio" href="#">enlace</a>
            <a className="espacio" href="#">enlace</a>
            <a className="espacio" href="#">enlace</a>
        </nav>
        <CartWidget cantidad={5}/>
        </header>
    )
}

// export default NavBar