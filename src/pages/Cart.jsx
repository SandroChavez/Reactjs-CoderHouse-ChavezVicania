import React, { createRef, useState } from 'react'

import { useCartContext } from '../contextos/Cart.context'

import Tittle from "../componentes/Tittle/Tittle"

import "./styles/Cart/Cart.css"
import { addOrder } from '../lib/oreder.requests'

const Cart = () => {

  const {cart,getTotalPrice,removeProduct,cleanCart} = useCartContext()

  const [idCompra,setIdCompra] = useState()

  const [buyer, setBuyer] = useState({
    name : undefined,
    email : undefined,
    email2: undefined,
    phone : undefined
  })

  const createOrder = async () =>{

    let buyerName = buyer.name
    let buyerEmail = buyer.email
    let buyerEmail2 = buyer.email2
    let buyerPhone = buyer.phone

    if(!buyerName){
      alert("Nombre vacio")
      return
    }

    if(!buyerEmail.includes("@") || !buyerEmail.endsWith(".com")){
      alert("Correo invalido")
      return 
    } 

    if(buyerEmail != buyerEmail2){
      alert("El Correo no es igual")
      return 
    }

    if(isNaN(buyerPhone) || buyerPhone.length < 9){
      alert("Telfeno invalido")
      return
    }

    const items = cart.map(({id, tittle, qty, price}) => ({id, tittle, qty, price}))

    const total = getTotalPrice

    const order = {
      buyer,
      items,
      total
    }
    const id = await addOrder(order)

    setIdCompra(id)
  };

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
            <div className='total'>
              <p>Total a pagar de la compra: {getTotalPrice}$</p>
            </div>
            <div className='form'>
              <div>
                <span>Nombre: </span>
                <input type="text" placeholder='Nombre' onChange={e => setBuyer({...buyer, name:e.target.value})}/>
              </div>
              <div>
                <span>Correo: </span>
                <input type="text" placeholder='Correo' onChange={e => setBuyer({...buyer, email:e.target.value})}/>
              </div>
              <div>
                <span>Repetir Correo: </span>
                <input type="text" placeholder='Repetir Correo' onChange={e => setBuyer({...buyer, email2:e.target.value}) }/>
              </div>
              <div>
                <span>Numero: </span>
                <input type="text" placeholder='Numero' onChange={e => setBuyer({...buyer, phone:e.target.value})}/>
              </div>
              <div>
                <button onClick={() => createOrder()}>Realizar pedido</button>
              </div>
              {!idCompra ? "": (
              <p className="id-compra" >el id de su compra es: {idCompra}</p>
              )}
            </div>
            
          </>
        )}
      </div>
          
    </div>
  )
}

export default Cart
