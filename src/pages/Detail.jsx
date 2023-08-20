import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate, useParams } from "react-router-dom";

import { getGame } from '../lib/games.request'

import ItemCount from '../componentes/ItemCount/ItemCount';

import { useCartContext } from '../contextos/Cart.context'

import "./styles/Detail/Detail.css"

const Detail = () => {

  const {id} = useParams()
  const [game,setGame] = useState({})
  const[loanding,setLoanding] = useState(true)
  const[gameStock,setGameStock] = useState()

  const { addProduct, itemInCart } = useCartContext();

  const navigate = useNavigate();

  useEffect(() => {
    getGame(id)
      .then((res) => {
        setGame(res)
        setLoanding(false)
        setGameStock(res.stock)
      })
  },[])

  const handleAdd = useCallback(
    (qty) => {
      addProduct(game, qty);
    },
    [addProduct, game]
  );

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
              {game.category.map((element) =>
              (
                <p onClick={() => {navigate(`/category/${element}`)}}>{element}</p>
              ))}
            </div>
            <div className='game--info-tittle'>
              <p>{game.tittle}</p>
            </div>
            <div className='game--buy' >
              <ItemCount
                stock={game.stock - (itemInCart?.(id)?.qty || 0)} //Se obtiene el item si existe en el cart y se le resta al stock la cantidad que este en el cart (si no existe le resta 0 para evitar errores)
                onAdd={handleAdd}
              />
              <div className='game--stock'>
                <p>{gameStock > 15 ? `Stock: ${gameStock}`:`¡Solo quedan: ${gameStock}!`}</p>
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
 