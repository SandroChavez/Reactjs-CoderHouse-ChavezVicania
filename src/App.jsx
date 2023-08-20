import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Category from "./pages/Category";
import Cart from "./pages/Cart";


import Lyout from "./componentes/Lyout/Lyout";

import CartProvider from "./contextos/Cart.context";

import "./App.css"

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Lyout/>}>
  
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail/>}/>
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="/cart" element={<Cart/>}/>
  
      </Route>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={routes}/>
    </CartProvider>
  )
}

export default App
