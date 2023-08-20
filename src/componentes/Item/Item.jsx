import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./Item.css"

const Item = ({
    id,
    tittle,
    category,
    price,
    img,
}) => {

    const navigate = useNavigate();

  return (
    <div className='Item' onClick={() => navigate(`/item/${id}`)}>
        <div className='Item--img'>
            <img src={img} alt={tittle + "-img"} />
        </div>
        <div className='Item--content'>
            <div className='Item--content-info'>
                <span className='Item--content-category' >{category.join(" - ")}</span>
                <span className='Item--content-tittle' >{tittle}</span>
                <span className='Item--content-price'>${price}</span>
            </div>         
        </div>  
    </div>
  )
}

export default Item