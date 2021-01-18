import { useEffect, useState } from 'react';
import '../ChefPending/ChefPending.css';

import Nav from '../commons/Nav/Nav.js';
import Card from '../../pages/commons/Card/components/Card.js';

import calculateDate from '../../utils/dates.js';
import { getAllOrders } from '../../controller/orders.js';

const dateEntry = new Date('Sat Jan 18 2021 08:46:57 GMT-0500');
const dateProcessed = new Date();

console.log(calculateDate(dateEntry, dateProcessed));

const ChefPending = ()  => {

    const [ arrayOrders , setArrayOrders ] = useState([]);

    useEffect(() => {
    
        getAllOrders()
            .then(data => { return setArrayOrders(data) })
            .catch(err => console.log(err))

    }, []) 
    
    const arrayPending  = arrayOrders.filter((el) => {return el.status == 'pending'})

    console.log('data', arrayPending);

    return (
        <div>
            <Nav className="nav-bar"/>
            <div className='card-container'>
                {/* <span>{calculateDate(dateEntry, dateProcessed)}</span> */}
                {   
                    arrayPending.map( order => {
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

export default ChefPending;