import React from 'react'
import './ProductsTitleTable.css'
import { TarjetaBebidas } from '../Menu/TarjetaBebidas'


export const DrinksTitleTable = ({titulo, arrayProductos}) => {

    let arrayTr = []

    const dibujarProductos = () => {
        let trsDeProductos = []
        if (arrayProductos) {
            trsDeProductos = arrayProductos.map((producto, i) => {
                arrayTr.push(producto)
                if (i % 3 === 2) {
                    const trToReturn = (<tr>
                        <td>
                            <TarjetaBebidas
                                nombre={arrayTr[0].nombre}
                                ingredientes={arrayTr[0].ingredientes}
                            ></TarjetaBebidas>
                        </td><td>
                            <TarjetaBebidas
                                nombre={arrayTr[1].nombre}
                                ingredientes={arrayTr[1].ingredientes}
                            ></TarjetaBebidas>
                        </td><td>
                            <TarjetaBebidas
                                nombre={arrayTr[2].nombre}
                                ingredientes={arrayTr[2].ingredientes}
                            ></TarjetaBebidas>
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
                            <TarjetaBebidas
                                nombre={arrayTr[0].nombre}
                                ingredientes={arrayTr[0].ingredientes}
                            ></TarjetaBebidas>
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
                            <TarjetaBebidas
                                nombre={arrayTr[0].nombre}
                                ingredientes={arrayTr[0].ingredientes}
                            ></TarjetaBebidas>
                        </td>
                        <td>
                            <TarjetaBebidas
                                nombre={arrayTr[1].nombre}
                                ingredientes={arrayTr[1].ingredientes}
                            ></TarjetaBebidas>
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
            <h3>{titulo}</h3>
            <table>
                {arrayProductos&&dibujarProductos()}
            </table>
        </div>

    )
}
