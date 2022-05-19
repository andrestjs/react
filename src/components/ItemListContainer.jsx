import React, { useState } from 'react'
import { ItemCount } from './ItemCount'

export const ItemListContainer = ({greeting}) => {

  const onAdd = ( num ) => {
    if(num < 1) return
    alert(`Se agregaron ${num} items`)
  }

  return (
    <>
      <div>{greeting}</div>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </>
  )
}
