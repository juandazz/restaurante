import React from 'react'
import './ProductsTitleTable.css'
import { TarjetaProducto } from '../Menu/TarjetaProducto'


export const ProductsTitleTable = ({titulo, arrayProductos}) => {

    let arrayTr = []

    const dibujarProductos = () => {
        let trsDeProductos = []
        if (arrayProductos) {
            trsDeProductos = arrayProductos.map((producto, i) => {
                arrayTr.push(producto)
                if (i % 3 === 2) {
                    const trToReturn = (<tr>
                        <td>
                            <TarjetaProducto
                                imagen={arrayTr[0].imagen}
                                nombre={arrayTr[0].nombre}
                                ingredientes={arrayTr[0].ingredientes}
                            ></TarjetaProducto>
                        </td><td>
                            <TarjetaProducto
                                imagen={arrayTr[1].imagen}
                                nombre={arrayTr[1].nombre}
                                ingredientes={arrayTr[1].ingredientes}
                            ></TarjetaProducto>
                        </td><td>
                            <TarjetaProducto
                                imagen={arrayTr[2].imagen}
                                nombre={arrayTr[2].nombre}
                                ingredientes={arrayTr[2].ingredientes}
                            ></TarjetaProducto>
                        </td>
                    </tr>)
                    arrayTr = []
                    return trToReturn
                }
            })
        }
        switch (arrayTr.length) {
            case 0:
                break;
            case 1:
                trsDeProductos.push(
                    <tr>
                        <td>
                            <TarjetaProducto
                                imagen={arrayTr[0].imagen}
                                nombre={arrayTr[0].nombre}
                                ingredientes={arrayTr[0].ingredientes}
                            ></TarjetaProducto>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                )
                break;
            case 2:
                trsDeProductos.push(
                    <tr>
                        <td>
                            <TarjetaProducto
                                imagen={arrayTr[0].imagen}
                                nombre={arrayTr[0].nombre}
                                ingredientes={arrayTr[0].ingredientes}
                            ></TarjetaProducto>
                        </td>
                        <td>
                            <TarjetaProducto
                                imagen={arrayTr[1].imagen}
                                nombre={arrayTr[1].nombre}
                                ingredientes={arrayTr[1].ingredientes}
                            ></TarjetaProducto>
                        </td>
                        <td></td>
                    </tr>
                )
                break;
            default:
        }
        return trsDeProductos
    }

    return (
        <div>
            <h3 className='ptt-title'>{titulo}</h3>
            <table>
                {arrayProductos&&dibujarProductos()}
            </table>
        </div>

    )
}
