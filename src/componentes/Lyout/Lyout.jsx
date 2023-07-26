import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import Whatsap from "../../assets/Whatsap.svg"

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
                    <div className="categorys" >
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/Category/Action" >Action</NavLink>
                        <NavLink to="/Category/Adventure">Adventure</NavLink>
                        <NavLink to="/Category/Zombies">Zombies</NavLink>
                        <NavLink to="/Category/Plataforms">Plataforms</NavLink>
                        <NavLink to="/Category/Farm">Farm</NavLink>
                    </div>
                    <CartWidget/>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <div className="Footer-div">
                    <div className="Footer--info">
                        <div className="Footer--contact">
                            <div>
                                <img src={Whatsap} alt="Whatsap" />
                            </div>
                            <div>
                                <p>Contactanos al: 999-999-999</p>
                            </div>
                        </div>
                        <div>
                            <p> ©FenixStore 2023 | Todos los derechos reservados </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Lyout;