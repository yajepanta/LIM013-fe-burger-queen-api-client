import { useEffect, useState } from 'react';
import '../ChefPending/ChefPending.css';

import Nav from '../commons/Nav/Nav.js';
import Card from '../../pages/commons/Card/components/Card.js';

import { getAllOrders,  updateOrders } from '../../controller/orders.js';

const ChefPending = ()  => {

    const [ arrayOrders , setArrayOrders ] = useState([]);

    useEffect(() => {
    
        getAllOrders()
            .then(data => { return setArrayOrders(data) })
            .catch(err => console.log(err))

    }, []) 
    
    const arrayPending  = arrayOrders.filter((el) => {return el.status === 'pending'})

    //console.log('data', arrayPending);

    const modifyOrder = (idOrden) => {
        /* createOrder recibe null porque falta el id de usuario*/
        /* if orderArray.lenght = 0 no se hace la peticion */
        //const products = arrayOrders.map(el=> {return ({ productId: el._id, qty: el.qty,})})

        console.log('id', idOrden);
        const uniqueOrder = arrayOrders.find(el => {return el._id == idOrden})

        console.log('uniqueOrder', uniqueOrder);
        
        const body = {
            /* userId: uniqueOrder.userId,
            client: uniqueOrder.client,
            products: uniqueOrder.products,  */
            status: 'delivering',
        };
        
        return updateOrders(body);
    };

    modifyOrder('01')

    return (
        <div>
            <Nav className="nav-bar"/>
            <div className='card-container'>
                {   
                    arrayPending.map( order => {
                        //console.log('order', order);
                        //console.log('tiempo',calculateDate(new Date(order.dateEntry), new Date(order.dateProcessed)));
                        return <Card 
                            key = {order._id}
                            status = {order.status}
                            calculateDate = ''
                            props = {{
                                "_id": order._id,
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