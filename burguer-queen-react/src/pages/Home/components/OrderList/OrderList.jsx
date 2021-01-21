import React from 'react';
import './OrderList.css';
import deleteIcon from '../../../../assets/images/delete-icon.png';


const OrderList = ({product, total}) => {
    return (
        <li className="order-list" > 

            <span className="span-product">{product.name}</span> 
            <button className="minusOne" id={product._id}>--</button>
            <span>{product.qty}</span> 
            <button className="plusOne" id={product._id}>+</button> 
            <span>s/ {total} </span>
            <img src={deleteIcon} className="deleteProduct" alt="Delete product" id={product._id}></img> 

        </li>
    );
};

export default OrderList;