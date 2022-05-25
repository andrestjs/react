import React, { useEffect, useState } from 'react'
import { getItem } from '../products'
import { Item } from './Item'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

  const [product,setProduct] = useState([])


  useEffect(()=>{
    getItem(2).then(res => setProduct(res));
  },[])

  return (
    <>
        {
            product.map(prod => <ItemDetail key={prod.id} {...prod}/>)
        }
    </>
  )
}
