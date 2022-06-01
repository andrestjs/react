import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ( { stock , initial , onAdd } ) => {
  
  const [count,setCount] = useState( initial );  
  
  const incrementCount = () => {
      if(count >= stock) return
      setCount( count => count + 1)
  }
  const decrementCount = () => {
    if(count <= 1) return
      setCount( count => count - 1)
  }

  return (
    <div className='item-count'>
        <div className='item-count__container'>
            <button className="item-count__button" onClick={ decrementCount }>-</button>
            <span className="item-count__num">{count}</span>
            <button className="item-count__button" onClick={ incrementCount }>+</button>
        </div>
        <div>
            <button className="item-count__add" onClick={ ()=> onAdd(count) }>Agregar</button>
        </div>
    </div>
  )
}
