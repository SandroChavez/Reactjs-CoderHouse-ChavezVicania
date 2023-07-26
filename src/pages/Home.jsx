import React from 'react'
import { useEffect, useState } from 'react'

import StyleTittle from '../componentes/StyleTittle/StyleTittle'
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import {getGames} from "../lib/games.request.js"

const Home = () => {

  const[games,setGames] = useState([])
  const[loanding,setLoanding] = useState(true)

  useEffect(() =>{
    getGames()
      .then(res => {
        setGames(res)
        setLoanding(false)
      })
      
  },[])

  return (
    <>
        <StyleTittle className={"Welcome"}>
          <h1>¡Bienvenido a FenixStore!</h1>
        </StyleTittle>
        <h5 className={loanding ? "Loanding" : ""} >{loanding ? "Cargando Datos..." : ""}</h5>
        <ItemListContainer list={games}/>
    </>
  )
}

export default Home
