import { useEffect, useState } from 'react';
import '../ChefPending/ChefPending.css';

import Nav from '../commons/Nav/Nav';
import Card from '../../pages/commons/Card/components/Card.js';

import calculateDate from '../../utils/dates.js';
import { getAllOrders } from '../../controller/orders.js';

const dateEntry = new Date('Sat Jan 16 2021 22:46:57 GMT-0500');
const dateProcessed = new Date();

const ChefDelivering = ()  => {

    const [ arrayOrders , setArrayOrders ] = useState([]);

    useEffect(() => {
        /* async function getData(url) {
            const response = await fetch(url);
            const result = await response.json();
            setArrayOrders(result);
        }

        getData('http://localhost:5000/orders')  */

        getAllOrders()
            .then(data => { console.log('data1', data); return setArrayOrders(data) })
            .catch(err => console.log(err)) 
    }, []) 

    console.log('data', arrayOrders);

    const arrayDelivering = arrayOrders.filter((el) => {return el.status == 'delivering'})

    return (
        <div>
            <Nav className="nav-bar"/>
            <div className='card-container'>
                {/* <span>{calculateDate(dateEntry, dateProcessed)}</span> */}
                {  
                    arrayDelivering.map( order => {
                        //console.log('order', order);
                        return <Card 
                            key = {order._id}
                            status = {order.status}
                            props = {{
                                "products": order.products
                            }}
                            />
                    })
                } 
                
            </div>
        </div>
        
    )
}

export default ChefDelivering;