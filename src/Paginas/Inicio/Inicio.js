import React, { useState } from 'react'
import './Inicio.css'
import InicioSesion from './InicioSesion';

export const Inicio = () => {

    const navegacionRef = React.createRef();

    const abrirMenu = () => {
        navegacionRef.current.classList.remove('ocultar');
        botonCerrar();

    }

    const botonCerrar = () => {
        const btnCerrar = document.createElement('p');
        const overlay = document.createElement('div');
        overlay.classList.add('pantalla-completa');
        const body = document.querySelector('body');
        if (document.querySelectorAll('.pantalla-completa').length > 0) return;
        body.appendChild(overlay);
        btnCerrar.textContent = 'x';
        btnCerrar.classList.add('btn-cerrar');
        /*while(navegacion.children[5]){
            navegacion.removeChild(navegacion.children[5]);
        }*/
        navegacionRef.current.appendChild(btnCerrar);
        cerrarMenu(btnCerrar, overlay, navegacionRef.current);

    }

    const cerrarMenu = (boton, overlay, navegacion) => {
        boton.addEventListener('click', () => {
            navegacion.classList.add('ocultar');
            overlay.remove();
            boton.remove();
        });

        overlay.onclick = function () {
            overlay.remove();
            navegacion.classList.add('ocultar');
            boton.remove();
        }

    }

    const [isLoginVisible, setIsLoginVisible] = useState(false);

    const toggleLogin = () => {
        setIsLoginVisible(!isLoginVisible);
    }

    return (
        <div>
            <header class="encabezado">
                <div class="contenedor-navegacion">
                    <div class="contenido-navegacion contenedor">
                        <div class="logo">
                            <h2>
                                Ristorante s <span class="verde">Tu</span><span>ri</span><span
                                    class="rojo">lli</span>
                            </h2>
                        </div>
                        <nav class="navegacion ocultar" ref={navegacionRef}>
                            <a href="#">Inicio</a>
                            <a href="#">Menu</a>
                            <a href="#">Menu</a>
                            <a href="#">Favoritos</a>
                            <a href="#" onClick={toggleLogin} >Iniciar Sesion</a>
                        </nav>
                        <div class="hamburguesa" onClick={abrirMenu} ><span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </header>
            <InicioSesion isVisible={isLoginVisible} setVisible={setIsLoginVisible} ></InicioSesion>
        </div>
    )
}
