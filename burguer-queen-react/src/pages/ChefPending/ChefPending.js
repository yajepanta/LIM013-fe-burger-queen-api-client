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

    /* const arrayOrders = [
        {
          "_id": "1",
          "userId": "userId",
          "client": "client",
          "products": [
            {
              "qty": 2,
              "product": {
                "_id": 1,
                "name": "Café americano",
                "price": "5.00",
                "image": "https://1.bp.blogspot.com/-pNVLQF44npc/WBfTRTaX5aI/AAAAAAAABV0/ZlwkeqVgJfM8D0REy7saXk8lYA_AkCTWgCLcB/s400/cesar-hinojosa-quiroz-caf%25C3%25A9-am%25C3%25A9ricano.jpg",
                "type": "breakfast",
                "dateEntry": "01/01/2020 15:00:00"
              }
            },
            {
              "qty": 5,
              "product": {
                "_id": 3,
                "name": "Sandwich de jamón y queso",
                "price": "10.00",
                "image": "https://1.bp.blogspot.com/-pNVLQF44npc/WBfTRTaX5aI/AAAAAAAABV0/ZlwkeqVgJfM8D0REy7saXk8lYA_AkCTWgCLcB/s400/cesar-hinojosa-quiroz-caf%25C3%25A9-am%25C3%25A9ricano.jpg",
                "type": "breakfast",
                "dateEntry": null
              }
            }
          ],
          "status": "pending",
          "dateEntry": "01/01/2020 15:00:00",
          "dateProcessed": "01/01/2020 15:00:00"
        },
        {
          "_id": "2",
          "userId": "userId",
          "client": "client",
          "products": [
            {
              "qty": 1,
              "product": {
                "_id": 3,
                "name": "Sándwich de jamón y queso",
                "price": "10.00",
                "image": "https://1.bp.blogspot.com/-pNVLQF44npc/WBfTRTaX5aI/AAAAAAAABV0/ZlwkeqVgJfM8D0REy7saXk8lYA_AkCTWgCLcB/s400/cesar-hinojosa-quiroz-caf%25C3%25A9-am%25C3%25A9ricano.jpg",
                "type": "breakfast",
                "dateEntry": "01/01/2020 15:00:00"
              }
            }
          ],
          "status": "pending",
          "dateEntry": "01/01/2020 15:00:00",
          "dateProcessed": "01/01/2020 15:00:00"
        },
        {
          "_id": "3",
          "userId": "userId",
          "client": "client",
          "products": [
            {
              "qty": 1,
              "product": {
                "_id": 1,
                "name": "Café americano",
                "price": "5.00",
                "image": "https://1.bp.blogspot.com/-pNVLQF44npc/WBfTRTaX5aI/AAAAAAAABV0/ZlwkeqVgJfM8D0REy7saXk8lYA_AkCTWgCLcB/s400/cesar-hinojosa-quiroz-caf%25C3%25A9-am%25C3%25A9ricano.jpg",
                "type": "breakfast",
                "dateEntry": "01/01/2020 15:00:00"
              }
            },
            {
                "qty": 5,
                "product": {
                  "_id": 9,
                  "name": "Jugo",
                  "price": "5.00",
                  "image": "https://1.bp.blogspot.com/-pNVLQF44npc/WBfTRTaX5aI/AAAAAAAABV0/ZlwkeqVgJfM8D0REy7saXk8lYA_AkCTWgCLcB/s400/cesar-hinojosa-quiroz-caf%25C3%25A9-am%25C3%25A9ricano.jpg",
                  "type": "breakfast",
                  "dateEntry": "01/01/2020 11:00:00"
                }
            },
            {
                "qty": 2,
                "product": {
                  "_id": 12,
                  "name": "Agua",
                  "price": "5.00",
                  "image": "https://1.bp.blogspot.com/-pNVLQF44npc/WBfTRTaX5aI/AAAAAAAABV0/ZlwkeqVgJfM8D0REy7saXk8lYA_AkCTWgCLcB/s400/cesar-hinojosa-quiroz-caf%25C3%25A9-am%25C3%25A9ricano.jpg",
                  "type": "breakfast",
                  "dateEntry": "01/01/2020 15:00:00"
                }
            }
          ],
          "status": "pending",
          "dateEntry": "01/01/2020 15:00:00",
          "dateProcessed": "01/01/2020 15:00:00"
        },
        {
          "_id": "4",
          "userId": "userId",
          "client": "client",
          "products": [
            {
              "qty": 5,
              "product": {
                "_id": 9,
                "name": "Jugo",
                "price": "5.00",
                "image": "https://1.bp.blogspot.com/-pNVLQF44npc/WBfTRTaX5aI/AAAAAAAABV0/ZlwkeqVgJfM8D0REy7saXk8lYA_AkCTWgCLcB/s400/cesar-hinojosa-quiroz-caf%25C3%25A9-am%25C3%25A9ricano.jpg",
                "type": "breakfast",
                "dateEntry": "01/01/2020 11:00:00"
              }
            }
          ],
          "status": "pending",
          "dateEntry": "11:01:00",
          "dateProcessed": "01/01/2020 15:00:00"
        },
        {
          "_id": "5",
          "userId": "userId",
          "client": "client",
          "products": [
            {
              "qty": 2,
              "product": {
                "_id": 12,
                "name": "Agua",
                "price": "5.00",
                "image": "https://1.bp.blogspot.com/-pNVLQF44npc/WBfTRTaX5aI/AAAAAAAABV0/ZlwkeqVgJfM8D0REy7saXk8lYA_AkCTWgCLcB/s400/cesar-hinojosa-quiroz-caf%25C3%25A9-am%25C3%25A9ricano.jpg",
                "type": "breakfast",
                "dateEntry": "01/01/2020 15:00:00"
              }
            },
            {
                "qty": 2,
                "product": {
                    "_id":4,
                   "name":"Hamburguesa simple",
                   "price":"10.00",
                   "image":"https://image.freepik.com/foto-gratis/vista-lateral-hamburguesa-carne-res-queso-derretido-verduras-sobre-tabla-madera_140725-11865.jpg",
                   "type": "lunch",
                   "dateEntry": null
                },
            },
            {
                "qty": 2,
                "product": {
                    "_id":5,
                   "name":"Papas fritas",
                   "price":"5.00",
                   "image":"https://image.freepik.com/foto-gratis/papas-fritas_144627-12398.jpg",
                   "type": "lunch",
                   "dateEntry": null
                }
            }
          ],
          "status": "delivering",
          "dateEntry": "01/01/2020 15:00:00",
          "dateProcessed": "01/01/2020 15:00:00"
        }
      ] */
    
    
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