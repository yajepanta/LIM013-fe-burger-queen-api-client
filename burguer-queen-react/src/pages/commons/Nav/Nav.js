import React from 'react';
import logo from '../../../assets/images/logo.svg';
import Cookies from 'universal-cookie';

import './Nav.css';

const cookies = new Cookies();

const logOut = () => {
    cookies.remove('cookieSession', {path:'/'});
    cookies.remove('cookieEmail', {path:'/'})
    window.location.href = './';
    //cookies.remove('id', {path:'/'});
}

const Nav = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="logo"></img>
                <div className='options flex-row'>
                    <button className="btn-nav" onClick={()=>{window.location.href='home'}}>
                        <i className="fas fa-home"></i> Inicio
                    </button>
                    <button className="btn-nav" onClick={()=>{window.location.href='pending'}}>
                    <i className="fas fa-hamburger"></i> Pendientes
                    </button>
                    <button className="btn-nav" onClick={()=>{window.location.href='delivering'}}>
                    <i className="fas fa-concierge-bell"></i> Listos
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