import React from 'react';
import logo from '../../../../assets/images/logo.svg';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="logo"></img>
            </nav>
        </div>
    );
}

export default Nav;