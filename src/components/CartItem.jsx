import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartItem = ({id,name,price,quantity}) => {
  const {removeItem} = useContext(CartContext);
  return (
 
    <div>
        <span>Nombre : {name}</span>
        <span>Precio : {price}</span>
        <span>Cantidad : {quantity}</span>
        <span>Sub Total : {price * quantity}</span>
        <button onClick={()=>removeItem(id)}>Eliminar</button>
    </div>
    
  )
}
