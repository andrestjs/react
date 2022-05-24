import React, { useEffect, useState } from 'react'
import { ItemCount } from './ItemCount'
import { getProducts } from '../products'
import { ItemList } from './ItemList';

export const ItemListContainer = ({greeting}) => {

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    getProducts().then(res => setProducts(res))
  },[])

  const onAdd = ( num ) => {
    if(num < 1) return
    alert(`Se agregaron ${num} items`)
  }


  return (
    <>
      <ItemList products={products} />
    </>
  )
}
