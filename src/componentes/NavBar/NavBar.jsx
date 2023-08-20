import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

import CartWidget from '../CartWidget/CartWidget';

import LogoFenix from "../../assets/logo-fenix.png"

import './NavBar.css' 


const NavBar = () => {

    const navigate = useNavigate()

  return (
    <header>
        <nav>
            {/* Logo */}
            <div className='logo'>
                <img src={LogoFenix} alt="logo-fenix" onClick={() => navigate(`/`)}/>
            </div>

            {/* Navegacion */}
            <div className='links' >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/category/Adventure">Adventure</NavLink>
                <NavLink to="/category/Plataforms">Plataforms</NavLink>
                <NavLink to="/category/Mystery">Mystery</NavLink>
                <NavLink to="/category/Action">Action</NavLink>
                <NavLink to="/category/Zombies">Zombies</NavLink>
                <NavLink to="/category/Farm">Farm</NavLink>
            </div>

            {/* Carrito */}
            <CartWidget/>
        </nav>
    </header>
  )
}

export default NavBar
