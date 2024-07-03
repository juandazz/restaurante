import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Inicio/Inicio.css'
import InicioSesion from './InicioSesion';

export const Navigate = () => {

    const navegacionRef = React.createRef();

    const abrirMenu = () => {
        navegacionRef.current.classList.remove('ocultar');
        botonCerrar();

    }

    let overlayE
  

    const botonCerrar = () => {
        const btnCerrar = document.createElement('p');
        const overlay = document.createElement('div');
        overlay.classList.add('pantalla-completa');
        const body = document.querySelector('body');
        if (document.querySelectorAll('.pantalla-completa').length > 0) return;
        body.appendChild(overlay);
        overlayE = overlay
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

    const navigate = useNavigate()

    const cambiarPantalla =(pantalla)=>{

        if(overlayE && navegacionRef.current){
            overlayE.remove();
            navigate(pantalla)
            navegacionRef.current.classList.add('ocultar');
        }
        

    }

    return (
        <div>
            <nav class="navegacion ocultar" ref={navegacionRef}>
                <a href="#" onClick={()=>cambiarPantalla('/')}>Inicio</a>
                <a href="#" onClick={()=>cambiarPantalla('/menu')}>Menu</a>
                <a href="#" onClick={()=>cambiarPantalla('/favoritos')}>Favoritos</a>
                <a href="#" onClick={toggleLogin} >Iniciar Sesion</a>
            </nav>
            <div class="hamburguesa" onClick={abrirMenu} ><span></span><span></span><span></span>
            </div>
            <InicioSesion isVisible={isLoginVisible} setVisible={setIsLoginVisible} ></InicioSesion>
        </div>
    )
}
