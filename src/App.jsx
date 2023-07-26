import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";


import Lyout from "./componentes/Lyout/Lyout";
import Home from "./pages/Home"
import Detail from "./pages/Detail";
import Category from "./pages/Category";

import "./estilos/style.css";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Lyout/>}> {/* ROUTE padre necesita <Outlet /> */}

      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<Detail />} />
      <Route path="/category/:id" element={<Category />} />

    </Route>
  )
);


const App = () => {

  return (
    <>
      <div>
        <RouterProvider router={routes} />
      </div>
    </>
  );
};

export default App;
