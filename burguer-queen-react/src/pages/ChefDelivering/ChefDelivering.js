import { useEffect, useState } from "react";
import "../ChefPending/ChefPending.css";

import Nav from "../commons/Nav/Nav.js";
import Card from "../../pages/commons/Card/components/Card.js";

import calculateDate from "../../utils/dates.js";
import { getAllOrders } from "../../controller/orders.js";

const ChefDelivering = () => {
  const [arrayOrders, setArrayOrders] = useState([]);

  useEffect(() => {
    /* async function getData(url) {
            const response = await fetch(url);
            const result = await response.json();
            setArrayOrders(result);
        }
        getData('http://localhost:5000/orders')  */

    getAllOrders()
      .then((data) => {
        return setArrayOrders(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //console.log('data', arrayOrders);

  const arrayDelivering = arrayOrders.filter((el) => {
    return el.status === "delivering";
  });

  return (
    <div>
      <Nav className="nav-bar" />
      <div className="card-container">
        {/* <span>{calculateDate(dateEntry, dateProcessed)}</span> */}
        {arrayDelivering.map((order) => {
          //console.log('tiempo',calculateDate(new Date(order.dateEntry), new Date(order.dateProcessed)));
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
              modifyOrder=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChefDelivering;
