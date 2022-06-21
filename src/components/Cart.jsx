import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'
import {addDoc, collection, orderBy} from 'firebase/firestore'
import { db } from '../services/firebase'

export const Cart = () => {

  const { cart ,getQuantity,getTotalPrice} = useContext(CartContext)
  let cantidad = getQuantity();

  const createOrder = () => {
    const orderObj = {
      buyer : {
        name : 'Andres Torres',
        email : 'asda@gmail.com',
        phone : 98765423,
        address : 'Av siempre vivas 1231',
        comment : 'Cerca de la casa verde'
      },
      items : cart,
      total : getTotalPrice()
    }

    const collectionRef = collection(db,'orders')

    addDoc(collectionRef,orderObj).then(res => {
      console.log(`El id de la orden es ${res.id}`)
    })
  }

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
      <button onClick={createOrder}>Generar Orden</button>
    </div>
    :
    <div>
     <p>No hay Items agregados <Link to='/'>Volver a la tienda</Link></p>
    </div>
  )
}
