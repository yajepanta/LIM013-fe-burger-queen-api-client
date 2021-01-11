import React from 'react';
import './OrderList.css';

const OrderList = ({product, total}) => {
    return (
        <li className="order-list" id={product._id}> 
            <span className='span-product'>{product.name}</span> 
            <button className="minusOne" id='minusOne'>-</button>
            <span>{product.qty}</span> 
            <button className="plusOne" id='plusOne'>+</button> 
            <span>S/. {total} </span>
            <i className="fas fa-trash icon-delete" id='deleteProduct'></i>
            
        </li>
    );
};

export default OrderList;