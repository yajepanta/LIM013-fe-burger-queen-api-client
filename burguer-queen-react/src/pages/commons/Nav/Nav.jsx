import React from 'react';
import logo from '../../../assets/images/logo.svg';

import Cookies from 'universal-cookie';

import './Nav.css';

const cookies = new Cookies();

const routes = (e) => {
    switch(e.target.name){
        case ("pending"): window.location.href = './chefPending';
        break;
        case ("delivering"): window.location.href = './chefDelivering';
        break;
        case ("logout"): {
            cookies.remove('cookieSession', {path:'/'});
            cookies.remove('cookieEmail', {path:'/'})
            window.location.href = './';
        }
        break;
        
    }
    //cookies.remove('id', {path:'/'});
   
}

const Nav = () => {

    return (
        <div>
            <nav>
                <img src={logo} alt="logo"></img>
                <div className='options flex-row'>
                    <button className="btn-logout" name ="pending" onClick={routes}>
                        <i className="fas fa-sign-out-alt"></i> PENDING
                    </button>
                    <button className="btn-logout" name ="delivering" onClick={routes}>
                        <i className="fas fa-sign-out-alt"></i> DELIVERING
                    </button>
                    <button className="btn-logout" name ="logout" onClick={routes}>
                        <i className="fas fa-sign-out-alt"></i> CERRAR SESIÓN
                    </button>          
                </div>      
            </nav>
        </div>
    );
}

export default Nav;