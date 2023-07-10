import React from "react";
import Carrito from "../../assets/carrito.svg"

const CartWidget = ({className}) => {
    return(
        <div className={className} >
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