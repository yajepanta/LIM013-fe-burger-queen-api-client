import React from 'react';
import logo from '../../../../assets/images/logo.svg';
import logout from '../../../../assets/images/logout.png';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="logo"></img>
                <button className="btn-logout">
                    <img src={logout} alt="Cerrar sesión"></img>
                    CERRAR SESIÓN
                </button>
                
            </nav>
        </div>
    );
}

export default Nav;