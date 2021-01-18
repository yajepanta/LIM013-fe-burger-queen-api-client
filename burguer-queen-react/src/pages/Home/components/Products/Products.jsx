import React from 'react';
import './Products.css';

const Products = ({props, handleProduct}) => {
    return (
        <div className="product-card" onClick={ (e) => handleProduct(props.id)}>
            <p> {props.name} </p>
            <p> s/ {props.price}</p>
        </div>
    );
}

export default Products;