import React from 'react';
import logo from '../../../../assets/images/logo.svg';


import Cookies from 'universal-cookie';

import './Nav.css';

const cookies = new Cookies();

const logOut = () => {
    //cookies.remove('id', {path:'/'});
    cookies.remove('cookieSession', {path:'/'});
    cookies.remove('cookieEmail', {path:'/'})
    window.location.href = './';
}

const Nav = () => {

    return (
        <div>
            <nav>
                <img src={logo} alt="logo"></img>
                <div className='options flex-row'>
                    <button className="btn-logout">
                        <i class="fas fa-sign-out-alt"></i> ?
                    </button>
                    <button className="btn-logout">
                        <i class="fas fa-sign-out-alt"></i> PENDIENTES
                    </button>
                    <button className="btn-logout">
                        <i class="fas fa-sign-out-alt"></i> LISTOS
                    </button>
                    <button className="btn-logout" onClick={logOut}>
                        <i class="fas fa-sign-out-alt"></i> CERRAR SESIÓN
                    </button>          
                </div>      
            </nav>
        </div>
    );
}

export default Nav;