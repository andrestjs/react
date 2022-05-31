import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../products'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

  const [product,setProduct] = useState([])

  const {id} = useParams();

  useEffect(()=>{
    getItem(id).then(res => setProduct(res));
    console.log(id);
  },[])

  return (
    <>
        {
            product.map(prod => <ItemDetail key={prod.id} {...prod}/>)
        }
    </>
  )
}
