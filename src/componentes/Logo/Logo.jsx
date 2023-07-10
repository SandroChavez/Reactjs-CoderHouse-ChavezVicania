import React from "react";
import Logo from "../../assets/logo-fenix.png"

const Icon = ({className}) => {
    return(
        <div className={className}>
            <img src={Logo} alt="logo-fenix" />
        </div>
    )
}

export default Icon