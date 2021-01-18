import React from 'react';
import Nav from '../commons/Nav/Nav.js';
const order = {
    "_id": "id",
    "userId": "userId",
    "client": "client 1",
    "products": [
        /* obj 1 */{"qty": 1,
        "product": {"_id":1,"name":"Café americano" }
        },

        /* obj 2 */{"qty": 2,
        "product": {"_id":2,"name":"Jugo" }
        }
    ],
    "status": "pending",
    "dateEntry": "15:01:00",
    "dateProcessed": "15:30:00"
  }

const ChefPending = () => {
    console.log(order.status, order.dateEntry, order.dateProcessed,
        order.products.map(product => { const datos = [];
            datos.push(product.product.name);
            datos.push(product.qty);
            return datos;
            }));
    
    return (
        <div>
            <Nav />
            ChefPending           
        </div>
    );
}

export default ChefPending;