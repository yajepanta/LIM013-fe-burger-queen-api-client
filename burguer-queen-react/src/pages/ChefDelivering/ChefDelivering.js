import { useEffect, useState } from 'react';
import '../ChefPending/ChefPending.css';
import Nav from '../commons/Nav/Nav.js';
import Card from '../../pages/commons/Card/components/Card.js';
import calculateDate from '../../utils/dates.js';
import { getAllOrders } from '../../controller/orders.js';

const ChefDelivering = () => {
  const [arrayOrders, setArrayOrders] = useState([]);

  useEffect(() => {

    getAllOrders()
      .then((data) => {
        return setArrayOrders(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arrayDelivering = arrayOrders.filter((el) => {
    return el.status === 'delivering';
  });

  return (
    <div> 
      <Nav className='nav-bar' />
      <div className='card-container'>
        {arrayDelivering.map((order) => {
          return (
            <Card
              key={order._id}
              status={order.status}
              calculateDate={calculateDate(
                new Date(order.dateEntry),
                new Date(order.dateProcessed)
              )}
              props={{
                products: order.products,
              }}
              modifyOrder=''
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChefDelivering;
