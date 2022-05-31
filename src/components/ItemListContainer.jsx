import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../products'
import { ItemList } from './ItemList';

export const ItemListContainer = ({greeting}) => {

  const [products,setProducts] = useState([]);

  const {id} = useParams();

  useEffect(()=>{
    (id) ? getProductsByCategory(id).then(res => setProducts(res)) : getProducts().then(res => setProducts(res));
  },[id])

  const onAdd = ( num ) => {
    if(num < 1) return
    alert(`Se agregaron ${num} items`)
  }


  return (
    <>
      <h1 style={{textAlign:'center',fontSize:'40px'}}>{greeting} {(id)?`: ${id}`:''}</h1>
      <ItemList products={products} />
    </>
  )
}
