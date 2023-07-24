import React from "react";

import Logo from "../Logo/Logo";
import BarraBusqueda from "../BarraBusqueda/BarraBusqueda"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>{
    return(
        <header>
            <nav>
                <Logo/>
                <BarraBusqueda/>
                <CartWidget/>
            </nav>
        </header>
    )
};

export default NavBar;