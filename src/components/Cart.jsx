import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'

export const Cart = () => {

  const { cart ,getQuantity,getTotalPrice} = useContext(CartContext)
  let cantidad = getQuantity();
  return (
    (cantidad > 0)
    ?
    <div>
      <ul>
        {
          cart.map(item => {
            return(<CartItem key={item.id} {...item}/>)
          })
        }
      </ul>
      <p>s./{getTotalPrice()}</p>
    </div>
    :
    <div>
     <p>No hay Items agregados <Link to='/'>Volver a la tienda</Link></p>
    </div>
  )
}
