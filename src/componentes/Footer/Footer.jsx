import React from 'react'

import IconWasap from "../../assets/Whatsap.svg"

import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="Footer-div">
            <div className="Footer--info">
                <div className="Footer--contact">
                    <div>
                        <img src={IconWasap} alt="Whatsap" />
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
  )
}

export default Footer
