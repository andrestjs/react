import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import "./CartWidget.css"
export const CartWidget = () => {
  const {getQuantity} = useContext(CartContext)
  let cantidad = getQuantity()
  return (
    <Link to="/cart" className='cart-widget' style={{display:(cantidad > 0)?'block':'none'}}>
        <img src="./images/cart.svg" alt="" className="cart-widget__icon" />
        <div className="cart-widget__count" >{cantidad}</div>
    </Link>
  )
}
