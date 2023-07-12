import React from "react";
import { useState } from "react";

import NavBar from "./componentes/NavBar/NavBar";
import Logo from "./componentes/Logo/Logo";
import CartWidget from "./componentes/CartWidget/CartWidget";
import BarraBusqueda from "./componentes/BarraBusqueda/BarraBusqueda";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import "./estilos/style.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="header-div" >
          <NavBar className={"NavBar"}>
            <Logo className={"Icon"} />
            <BarraBusqueda className={"BarraBusqueda"} />
            <CartWidget className={"CartWidget"} />
          </NavBar>
        </div>
      </header>
      <main>
        <ItemListContainer texto={"Lista de juegos"} />
      </main>
    </>
  );
};

export default App;
