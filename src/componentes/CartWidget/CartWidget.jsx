import React from 'react'

import { useNavigate } from 'react-router-dom'

import { useCartContext } from '../../contextos/Cart.context'

import carritoIcono from '../../assets/carrito.svg'

import "./CartWidget.css"

const CartWidget = () => {

    const navigate = useNavigate()

    const {getCartQty} = useCartContext()

  return (
    <div className='carrito' onClick={() => navigate(`/cart`)}>
      <div className='carrito-icono' >
        <img src={carritoIcono} alt="carrito.png" />
      </div>
      <span>
        {getCartQty}
      </span>
    </div>
  )
}

export default CartWidget
