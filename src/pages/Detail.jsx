import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import { getGame } from '../lib/games.request'

import ItemCount from '../componentes/ItemCount/ItemCount';

const Detail = () => {

  const {id} = useParams()
  const [game,setGame] = useState({})
  const[loanding,setLoanding] = useState(true)
  const[gameStock,SetGameStock] = useState()

  useEffect(() => {
    getGame(+id)
      .then((res) => {
        setGame(res)
        setLoanding(false)
        SetGameStock(res.stock)
      })
  },[])

  if(!Object.keys(game).length) return
  
  return (
    <>
      <h5 className={loanding ? "Loanding" : ""} >{loanding ? "Cargando Datos..." : ""}</h5>
      <div className='conteiner' >
        
        <div className='game'>
          <div className='game--img'>
            <img src={game.img} alt="" />
          </div>
          <div className='game--info'>
            <div className='game--info-category'>
              <p>{game.category.join(" - ")}</p>
            </div>
            <div className='game--info-tittle'>
              <p>{game.tittle}</p>
            </div>
            <div className='game--buy' >
              <ItemCount stock={gameStock} />
              <div className='game--stock'>
                <p>{gameStock > 15 ? `Stock ${gameStock}`:`¡Solo quedan: ${gameStock}!`}</p>
              </div>
            </div>
            <div className='game--info-price'>
                <p>{game.price}$</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
