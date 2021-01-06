import React from 'react';
import './OrderList.css';
import deleteIcon from '../../../../assets/images/delete-icon.png';

const OrderList = ({product}) => {
    return (
        <li className="order-list" id={product._id}> 
            <span>{product.name}</span> 
            <button className="minusOne">--</button>
            {product.qty} 
            <button className="plusOne">+</button> 
            <span>s/ {product.price*product.qty}</span>
            <img src={deleteIcon} className="deleteProduct" alt="Delete product"></img> 
        </li>
    );
};

export default OrderList;