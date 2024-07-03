import React, { useState } from 'react'
import '../Inicio/Inicio.css'
import { Navigate } from '../Componentes/Navigate';
import { ProductsTitleTable } from '../Componentes/ProductsTitleTable';
import { DrinksTitleTable } from '../Componentes/DrinksTitleTable';

export const Menu = () => {

    const arrayProductos = [
        {
            imagen: 'https://www.gourmet.cl/wp-content/uploads/2016/12/Carbonara-editada.jpg',
            nombre: 'Pasta Carbonara',
            ingredientes: 'Spaguetti ......'
        },
        {
            imagen: 'https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/nola/colombia/calcmenu/recipes/CO-recipes/pasta-dishes/pasta-en-salsa-bolognesa/main-header.jpg',
            nombre: 'Pasta Bolognesa',
            ingredientes: 'Spaguetti ......'
        },
        {
            imagen: 'https://www.budgetbytes.com/wp-content/uploads/2022/01/Shrimp-Alfredo-Pasta-bowl2-500x500.jpg',
            nombre: 'Pasta Alfredo',
            ingredientes: 'Spaguetti ......'
        },
        {
            imagen: 'https://www.budgetbytes.com/wp-content/uploads/2022/01/Shrimp-Alfredo-Pasta-bowl2-500x500.jpg',
            nombre: 'Pasta Alfredo',
            ingredientes: 'Spaguetti ......'
        }, {
            imagen: 'https://www.budgetbytes.com/wp-content/uploads/2022/01/Shrimp-Alfredo-Pasta-bowl2-500x500.jpg',
            nombre: 'Pasta Alfredo',
            ingredientes: 'Spaguetti ......'
        },
    ]

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
            <div>
                <ProductsTitleTable
                    titulo='Entradas'
                    arrayProductos={arrayProductos}
                >
                </ProductsTitleTable>
                <ProductsTitleTable
                    titulo='Platos Fuertes'
                    arrayProductos={arrayProductos}
                >
                </ProductsTitleTable>
                <DrinksTitleTable
                    titulo='Bebidas'
                    arrayProductos={arrayProductos}
                >
                </DrinksTitleTable>
                <ProductsTitleTable
                    titulo='Cocteles'
                    arrayProductos={arrayProductos}
                >
                </ProductsTitleTable>
            </div>
        </div>
    )
}
