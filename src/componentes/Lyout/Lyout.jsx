import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import Logo from "../Logo/Logo";
import BarraBusqueda from "../BarraBusqueda/BarraBusqueda"
import CartWidget from "../CartWidget/CartWidget";

const Lyout = () =>{
    return(
        <>
            <header>
                <nav>
                    <NavLink to="/">
                        <Logo/>
                    </NavLink>
                    <BarraBusqueda/>
                    <CartWidget/>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                El footer
            </footer>
        </>
    )
};

export default Lyout;