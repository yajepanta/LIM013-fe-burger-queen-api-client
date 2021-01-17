import { useEffect, useState } from 'react';
import '../ChefPending/ChefPending.css';

import Nav from '../commons/Nav/Nav';
import Card from '../../pages/commons/Card/components/Card.js';

import calculateDate from '../../utils/dates.js';
import { getAllOrders } from '../../controller/orders.js';

const dateEntry = new Date('Sat Jan 16 2021 22:46:57 GMT-0500');
const dateProcessed = new Date();

const ChefDelivering = ()  => {

    //const [ arrayOrders , setArrayOrders ] = useState();

    /* useEffect(() => {
        /* async function getData(url) {
            const response = await fetch(url);
            const result = await response.json();
            setArrayOrders(result);
        }

        getData('http://localhost:5000/orders') 
        getAllOrders()
            .then(data => { return setArrayOrders(data) })
            .catch(err => console.log(err))

    }, []) */

    return (
        <div>
            <Nav className="nav-bar"/>
            <div className='card-container'>
               
            </div>
        </div>
        
    )
}

export default ChefDelivering;