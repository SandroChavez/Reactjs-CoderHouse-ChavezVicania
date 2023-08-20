import React, { useCallback, useEffect } from 'react'

import { useCartContext } from '../contextos/Cart.context'

import Tittle from "../componentes/Tittle/Tittle"

import "./styles/Cart/Cart.css"

const Cart = () => {

  const {cart,getTotalPrice,removeProduct,cleanCart} = useCartContext()

  return (
    <div className='cart'>
      <Tittle>Carrito</Tittle>
      <div>
        {cart.length == 0 ? (
          <h2> no hay productos en el carrito </h2>
        ):(
          <>
            <div className='cart__games'>
            {cart.map(game => (
              <div className='game-cart' >
                <div className='game__img'>
                  <img  src={game.img} alt="" />
                </div>
                <div className='game__info'>
                  <span className='game__info-tittle'>Titulo: {game.tittle}</span>
                  <span className='game__info-qty'>solicitado: {game.qty}</span>  
                  <span className='game__info-price'>precio por unidad: {game.price}$</span>
                </div>
                <button className='game__button-remove' onClick={() => removeProduct(game.id)} >Eliminar</button>
              </div>
            ))}
            </div>
            <div className='game__button-remove-all'>
              <button onClick={() => cleanCart()}>Limpiar el carrito</button>
            </div>
            <div>
              Total a pagar de la compra: {getTotalPrice}$
            </div>
          </>
        )}
      </div>
          
    </div>
  )
}

export default Cart
