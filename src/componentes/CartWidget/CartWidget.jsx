import React from "react";
import Carrito from "../../assets/carrito.svg"

const CartWidget = () => {
    return(
        <div className={"CartWidget"} >
            {/* Icono Carrito */}
            <div>
                <img src={Carrito} alt="carrito" />
            </div>

            {/* Objetos Carrito */}
            <div>
                <p>{5}</p>
            </div>
        </div>
    )
}

export default CartWidget