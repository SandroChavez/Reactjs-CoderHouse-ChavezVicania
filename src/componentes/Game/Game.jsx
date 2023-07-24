import React from 'react'

const Juegos = ({id,img,name,category,price}) => {

  return (
    <div>
      <div>
        <img src={img} alt={name} />
      </div>
      <p>{name}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  )
}

export default Juegos
