import React from 'react'
import './TarjetaProducto.css'



export const TarjetaBebidas = ({ nombre, ingredientes}) => {
  return (
    <div>
        <p className='nombre-producto'>{nombre}</p>
        <p className='ingredientes-producto'>{ingredientes}</p>
    </div>
  )
}


