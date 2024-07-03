import React, { useState } from 'react'
import './Inicio.css'
import { Navigate } from '../Componentes/Navigate';

export const Inicio = () => {

    return (
        <div>
            <header class="encabezado">
                <div class="contenedor-navegacion">
                    <div class="contenido-navegacion contenedor">
                        <div class="logo">
                            <h2>
                                Ristorante <span class="verde">Tu</span><span>ri</span><span
                                    class="rojo">lli</span>
                            </h2>
                        </div>
                        <Navigate></Navigate>
                    </div>
                </div>
            </header>
        </div>
    )
}
