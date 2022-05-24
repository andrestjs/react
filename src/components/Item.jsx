import React from 'react'
import './Item.css'

export const Item = ({title,description,price,pictureUrl}) => {

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
        <a href="#">Ver Producto</a>
    </div>
  )
}
