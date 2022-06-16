import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../products'
import { db } from '../services/firebase'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

  const [product,setProduct] = useState()

  const {id} = useParams();

  useEffect(()=>{
    //getItem(id).then(res => setProduct(res));
    
    getDoc(doc(db,'items',id)).then(res => {
      const prod = {
        id : res.id,
        ...res.data()
      }
      setProduct(prod)
    })
  },[])

  return (
    <>
        <ItemDetail {...product}/>    
    </>
  )
}
