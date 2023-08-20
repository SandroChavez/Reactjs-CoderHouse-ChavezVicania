import React, {useState, useEffect}from 'react'

import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import Tittle from "../componentes/Tittle/Tittle"

import {cargarData, getGames} from "../lib/games.request.js"

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
        <Tittle>¡Bienvenido a FenixStore!</Tittle>
        <ItemListContainer list={games}/>
    </>
  )
}

export default Home
