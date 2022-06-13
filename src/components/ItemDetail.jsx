import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount'
import './ItemDetail.css'

export const ItemDetail = ({id,title,description,price,pictureUrl}) => {

  const [cantidad,setCantidad] = useState(0);

  const {addItem} = useContext(CartContext);

  const onAdd = (num) => {
    setCantidad(num)
    addItem({
      id,
      name:title,
      price,
      quantity:num,
      description,
      pictureUrl
    })
  }





  return (
    <div className="item-detail">
        <div className="item-detail__image">
            <img src={pictureUrl} alt={title} />
        </div>
        <div className="item-detail__details">
            <h2 className="item-detail__title">{title}</h2>
            <span className="item-detail__price">s/{price}</span>
            <p className='item-detail__description'>{description}</p>
            
            {(cantidad > 0)
            ?
              <>
                <h5 style={{color:'green',fontSize:'30px'}}>{`Se agregaron ${cantidad} ${title}`} </h5>
                <div><Link to='/cart'>Terminar Compra</Link></div>
              </>
            :
              <ItemCount stock={25} initial={1} onAdd={onAdd}/>}
        </div>
    </div>

  )
}
