import React from 'react';
import './Products.css';

const Products = ({props, handleProduct}) => {
    return (
        <div /* id={props.id} */ className="product-card" onClick={ (e) => handleProduct(props.id)}>
            <p> {props.name} </p>
            <p> S/. {props.price}</p>
        </div>
    );
}

export default Products;