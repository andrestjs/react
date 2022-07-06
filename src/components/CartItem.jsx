import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './CartItem.css';

export const CartItem = ({id,name,price,quantity,close = true}) => {
  const {removeItem} = useContext(CartContext);
  return (
 
    <div class="card-item">
        <span class="card-item__data">Nombre : {name}</span>
        <span class="card-item__data">Precio : {price}</span>
        <span class="card-item__data">Cantidad : {quantity}</span>
        <span class="card-item__data">Sub Total : {price * quantity}</span>
        {
        (close)
        ?
        <button style={{width:"30px",height:"30px",display:"inline-flex",border:"none",justifyContent:"center",alignItems:"center",padding:"4px",backgroundColor:"red",color:"#fff"}} onClick={()=>removeItem(id)}>X</button> 
        : 
        ""
        }
        
    </div>
    
  )
}
