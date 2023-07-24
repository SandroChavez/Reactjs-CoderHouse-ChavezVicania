import React from 'react'

const Item = ({
    tittle,
    category,
    price,
    img,
}) => {
  return (
    <div className='Item' >
        <div className='Item--img'>
            <img src={img} alt={tittle + "-img"} />
        </div>
        <div className='Item--content'>
            <div className='Item--content-info'>
                <span className='Item--content-category' >{category}</span>
                <span className='Item--content-tittle' >{tittle}</span>
                <span className='Item--content-price'>${price}</span>
            </div>         
        </div>  
    </div>
  )
}

export default Item
