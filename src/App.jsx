import React from "react";
import { useState } from 'react'

import  NavBar  from './componentes/NavBar/NavBar'
import Logo from "./componentes/Logo/Logo";
import  CartWidget  from './componentes/CartWidget/CartWidget'
import BarraBusqueda from "./componentes/BarraBusqueda/BarraBusqueda";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import "./estilos/style.css"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <header>
      <NavBar className={"NavBar"}>
        <Logo className={"Icon"} />
        <BarraBusqueda className={"BarraBusqueda"} />
        <CartWidget className={"CartWidget"}/>
      </NavBar>
      <ItemListContainer texto={"Lista de productos"}/>
    </header>
  )
}

export default App
