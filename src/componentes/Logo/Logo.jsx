import React from "react";

import LogoFenix from "../../assets/logo-fenix.png"


const Logo = () => {
  return (
    <div className={"Logo"} >
      <a href="#">
        <img src={LogoFenix} alt={"Logo-Fenix"} />
      </a>
    </div>
 )
}

export default Logo