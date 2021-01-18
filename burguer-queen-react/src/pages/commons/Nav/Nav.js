import React from 'react';
import logo from '../../../assets/images/logo.svg';
<<<<<<< HEAD:burguer-queen-react/src/pages/commons/Nav/Nav.jsx
=======

>>>>>>> 62cd84a41de752e9683354761d83b881b3127715:burguer-queen-react/src/pages/commons/Nav/Nav.js

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
                    <button className="btn-nav" onClick={()=>{window.location.href='home'}}>
                        <i class="fas fa-home"></i> Inicio
                    </button>
                    <button className="btn-nav" onClick={()=>{window.location.href='pending'}}>
                    <i class="fas fa-hamburger"></i> Pendientes
                    </button>
                    <button className="btn-nav" onClick={()=>{window.location.href='delivering'}}>
                    <i class="fas fa-concierge-bell"></i> Listos
                    </button>
                    <button className="btn-nav" onClick={logOut}>
                        <i className="fas fa-sign-out-alt"></i> Cerrar sesión
                    </button>          
                </div>      
            </nav>
        </div>
    );
}

export default Nav;