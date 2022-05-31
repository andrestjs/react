import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import { ItemCount } from './ItemCount'
export const Item = ({id,title,description,price,pictureUrl}) => {

  return (
    <div className='item'>
        <div className="item__image">
            <img src={pictureUrl} alt={title} />
        </div>
        <div className="item__content">
            <h3 className="item__title">{title}</h3>
            <p className="item__description">{description}</p>
            <span className="item__price">s./{price}</span>
        </div>
        <Link to={`/item/${id}`}>Ver Producto</Link>
        <ItemCount stock={15} initial={1}  />
    </div>

  )
}
