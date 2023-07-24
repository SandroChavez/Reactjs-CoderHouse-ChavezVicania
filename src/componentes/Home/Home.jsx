import React from 'react'

import Welcome from '../Welcome/Welcome'
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import GAMES from "../../lib/games.request"

const Home = () => {
  return (
    <main>
        <Welcome/>
        <ItemListContainer list={GAMES}/>
    </main>
  )
}

export default Home
