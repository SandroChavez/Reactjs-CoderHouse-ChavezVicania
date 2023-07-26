import React from 'react'

const Game = ({id,img,name,category,price}) => {

  return (
    <div id={id} >
      <div>
        <img src={img} alt={name} />
      </div>
      <p>{name}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  )
}

export default Game
