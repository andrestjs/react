import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount'
import './ItemDetail.css'

export const ItemDetail = ({title,description,price,pictureUrl}) => {

  const [cantidad,setCantidad] = useState(0);

  const onAdd = (num) => {
    setCantidad(num)
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
                <div><Link to='/cart'>Ver Carrito</Link></div>
              </>
            :
              <ItemCount stock={25} initial={1} onAdd={onAdd}/>}
        </div>
    </div>

  )
}
