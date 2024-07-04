import React, { useState } from 'react'
import '../Inicio/Inicio.css'
import { Navigate } from '../Componentes/Navigate';
import { ProductsTitleTable } from '../Componentes/ProductsTitleTable';
import { DrinksTitleTable } from '../Componentes/DrinksTitleTable';
import axios from '../../axios';

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

    const [ entradas, setEntradas ] = useState()
    if(!entradas){
        axios.get('get/entradas').then((res)=>{
            if(res&&res.data){
                setEntradas(res.data)
            }
        })
    }
    const [ platosFuertes, setPlatosFuertes ] = useState()
    if(!platosFuertes){
        axios.get('get/platos_fuertes').then((res)=>{
            if(res&&res.data){
                setPlatosFuertes(res.data)
            }
        })
    }
    const [ bebidas, setBebidas ] = useState()
    if(!bebidas){
        axios.get('get/bebidas').then((res)=>{
            if(res&&res.data){
                setBebidas(res.data)
            }
        })
    }  
    const [ cocteles, setCocteles ] = useState()
    if(!cocteles){
        axios.get('get/cocteles').then((res)=>{
            if(res&&res.data){
                setCocteles(res.data)
            }
        })
    }

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
                    arrayProductos={entradas}
                />
                <ProductsTitleTable
                    titulo='Platos Fuertes'
                    arrayProductos={platosFuertes}
                >
                </ProductsTitleTable>
                <DrinksTitleTable
                    titulo='Bebidas'
                    arrayProductos={bebidas}
                >
                </DrinksTitleTable>
                <ProductsTitleTable
                    titulo='Cocteles'
                    arrayProductos={cocteles}
                >
                </ProductsTitleTable>
            </div>
        </div>
    )
}
