import React from 'react'
import "./CartWidget.css"
export const CartWidget = () => {
  return (
    <div className='cart-widget'>
        <img src="./images/cart.svg" alt="" className="cart-widget__icon" />
        <div className="cart-widget__count">4</div>
    </div>
  )
}
