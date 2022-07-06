import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'
import './Cart.css'
export const Cart = () => {

  const { cart ,getQuantity,getTotalPrice} = useContext(CartContext)
  let cantidad = getQuantity();

  

  return (
    (cantidad > 0)
    ?
    <div className="container ">
      <h1 style={{textAlign:"center",fontSize:"40px",marginBottom:"50px"}}>Detalle de Compra</h1>
      <ul className='cart-item-container'>
        {
          cart.map(item => {
            return(<CartItem key={item.id} {...item}/>)
          })
        }
      </ul>
      <p style={{fontSize:"40px"}}>s./{getTotalPrice()}</p>
      <Link to="/checkout" style={{}}>COMPRAR</Link>
    </div>
    :
    <div className="container">
     <p>No hay Items agregados <Link to='/'>Volver a la tienda</Link></p>
    </div>
  )
}
