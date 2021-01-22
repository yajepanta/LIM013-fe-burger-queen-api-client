import { useEffect, useState } from "react";
import "../ChefPending/ChefPending.css";
import { trackPromise } from "react-promise-tracker";
import Nav from "../commons/Nav/Nav.js";
import Card from "../../pages/commons/Card/components/Card.js";
import { getAllOrders, updateOrders } from "../../controller/orders.js";

const ChefPending = () => {
  const [arrayOrders, setArrayOrders] = useState([]);

  useEffect(() => {
    trackPromise(
      getAllOrders()
        .then((data) => {
          return setArrayOrders(data);
        })
        .catch((err) => console.log(err))
    );
  }, []);

  const arrayPending = arrayOrders.filter((el) => {
    return el.status === "pending";
  });

  const modifyOrder = (idOrden) => {
    const uniqueOrder = arrayPending.filter((el) => {
      return el._id === idOrden;
    });

    let body = {};

    uniqueOrder.map((el) => {
      return (body = {
        userId: el.userId,
        client: el.client,
        products: el.products,
        status: "delivering",
      });
    });

    console.log("Se supone que se debe eliminar...");
    const updateData = arrayPending.filter((el) => {
      return el._id !== idOrden;
    });
    setArrayOrders(updateData);
    return updateOrders(body);
  };

  return (
    <div>
      <Nav className="nav-bar" />
      <div className="card-container">
        {arrayPending.map((order) => {
          return (
            <Card
              key={order._id}
              status={order.status}
              calculateDate=""
              props={{
                _id: order._id,
                products: order.products,
              }}
              modifyOrder={modifyOrder}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChefPending;
