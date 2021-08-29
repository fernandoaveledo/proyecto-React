import {CartWidget} from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'
export    const NavBar = () => {
    return (
        <header className="navbar">
            <Link to={"/"}><h1>LOGO</h1></Link>
        <nav>
            <Link to={"/category/gas-pimienta"}>Gas pimienta</Link>
            <Link to={"/category/llavero"}>Llavero</Link>
            <Link to={"/cart"}>Carrito</Link>
        </nav>
        <CartWidget cantidad={5}/>
        </header>
    )
}

// export default NavBar