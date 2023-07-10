import React from "react";

const NavBar = ({children,className}) =>{
    return(
        <nav className={className} >   
            {children}
        </nav>
    )
};

export default NavBar;