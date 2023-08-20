import React from 'react'
import { Outlet } from "react-router-dom";

import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';

const Lyout = () => {
  return (
    <>
        <NavBar/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Lyout 