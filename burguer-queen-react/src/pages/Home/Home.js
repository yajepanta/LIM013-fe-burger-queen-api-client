import React, { useCallback, useEffect, useState} from 'react';
import '../Home/Home.css';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import Nav from '../commons/Nav/Nav.js';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';
import OrderList from './components/OrderList/OrderList';
import getAllProducts from '../../controller/products.js'
import {createOrder } from '../../controller/orders.js';
import deleteProduct from '../../utils/products.js';
/* import Draggable, {DraggableCore} from 'react-draggable'; */

const Home = () => {

    return(
        <div>
            <Nav></Nav>
        </div>
    )
}

export default Home;