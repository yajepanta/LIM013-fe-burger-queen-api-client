import React from 'react';
import './OrderList.css';
import deleteIcon from '../../../../assets/images/delete-icon.png';

const OrderList = ({product, total}) => {
    return (
        <li className="order-list" id={product._id}> 
            <span>{product.name}</span> 
            <button className="minusOne">--</button>
            <span>{product.qty}</span> 
            <button className="plusOne">+</button> 
            <span>s/ {total} </span>
            <img src={deleteIcon} className="deleteProduct" alt="Delete product"></img> 
        </li>
    );
};

export default OrderList;