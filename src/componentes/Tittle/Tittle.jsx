import React from 'react'

import "./Tittle.css"

const Tittle = ({children}) => {
  return (
    <h1>
        <span className='tittle'>{children}</span>
    </h1>
  )
}

export default Tittle
