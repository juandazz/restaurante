import React, { useState } from 'react';
import './InicioSesion.css'; // Asegúrate de tener un archivo CSS para los estilos

const InicioSesion = ({ isVisible, setVisible }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el inicio de sesión
        console.log('Iniciando sesión con:', { email, password });
    };

    let dentro = false

    const cerrar = () => {
        if (!dentro) {
            setVisible(false)
        } else {
            dentro = false
        }
    }

    const clickDentro = () => {
        dentro = true
    }

    return (
        <>
            {isVisible && (
                <div className="login-form-overlay" onClick={cerrar}>
                    <form onSubmit={handleLogin} className="login-form" onClick={clickDentro}>
                        <div className='is-center-container'>
                            <h2>Iniciar Sesión</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input
                                className='input-form'
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña:</label>
                            <input
                                className='input-form'
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='is-center-container'>
                            <button type="submit" className='is-button'>Iniciar Sesión</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default InicioSesion;
