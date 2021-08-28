import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.scss'

export const CartWidget = ( {cantidad=0} ) => {
    return (
        <div>
            <FaShoppingCart className="cartWidget"/>
            <span className="cartWidget">{cantidad}</span>
        </div>
    )
}

