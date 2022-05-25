import React from 'react'
import './ItemDetail.css'

export const ItemDetail = ({title,description,price,pictureUrl}) => {
  return (
    <div className="item-detail">
        <div className="item-detail__image">
            <img src={pictureUrl} alt={title} />
        </div>
        <div className="item-detail__details">
            <h2 className="item-detail__title">{title}</h2>
            <span className="item-detail__price">s/{price}</span>
            <p className='item-detail__description'>{description}</p>
        </div>
    </div>
  )
}
