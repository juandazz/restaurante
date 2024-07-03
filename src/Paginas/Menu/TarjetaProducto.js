import React from 'react'
import './TarjetaProducto.css'



export const TarjetaProducto = ({imagen, nombre, ingredientes}) => {
  return (
    <div style={{backgroundColor:'red'}} className='tp-container'>
        <img className = 'imagen-producto' src={imagen}>
        </img>
        <p className='nombre-producto'>{nombre}</p>
        <p className='ingredientes-producto'>{ingredientes}</p>
    </div>
  )
}


