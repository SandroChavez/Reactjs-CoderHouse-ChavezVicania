import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import { getGame } from '../lib/games.request'

const Detail = () => {

  const {id} = useParams()
  const [game,setGame] = useState({})

  useEffect(() => {
    getGame(+id)
      .then((res) => setGame(res))
  },[])

  if(!Object.keys(game).length) return
  
  return (
    <main>
      <div className='conteiner' >
        <div className='game'>
          <div className='game--img'>
            <img src={game.img} alt="" />
          </div>
          <div className='game--info'>
            <div className='game--info-category'>
              <p>{game.category}</p>
            </div>
            <div className='game--info-tittle'>
              <p>{game.tittle}</p>
            </div>
            <div>
              <p>{game.description}</p>
            </div>
            <div className='game--buy' >
              <div className='game--button'>
                {"Button"}
              </div>
              <div>
                {game.stock}
              </div>
            </div>
            <div className='game--info-price'>
                <p>{game.price}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Detail
