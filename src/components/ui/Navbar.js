import React, { useState } from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'

// Componente Nav de la aplicación
const Navbar = () => {

    // states para abrir y cerrar el menu
    const [showMenu, setshowMenu] = useState(false)

    return (
        <nav className="nav-container">
            <div className='wrapper'>
                {/* Zona de la izquierda del nav */}
                <div className='nav-left'>
                    <Link 
                        className="nav-left__logo" 
                        to="/"
                    >
                        Logo
                    </Link>
                </div>
                {/* Zona de la derecha del nav */}
                <div className='nav-right'>
                        <div className='nav-right__menu' onClick={() => setshowMenu(!showMenu)}>
                            <i className="fas fa-bars"></i>
                        </div>
                        <ul className={ (showMenu) ? "nav-right__sesiones" : "nav-right__sesiones-active" } >
                            <li>
                                
                                <NavLink 
                                    className={ ({isActive}) => "nav-right__sesiones__link " + (isActive ? 'active' : '') }
                                    to="/login"
                                    onClick={() => setshowMenu(false)}
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li>

                                <NavLink 
                                    className={ ({isActive}) => "nav-right__sesiones__link " + (isActive ? 'active' : '') }
                                    to="/registro"
                                    onClick={() => setshowMenu(false)}
                                >
                                    Registrarse
                                </NavLink>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
