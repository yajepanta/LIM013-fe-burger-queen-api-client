import React from 'react';
import './Products.css';

const Products = ({props, /* handleProduct */}) => {
    return (
        <div id={props.id} className="product-card" /* onClick={ (e) => handleProduct(e.target.id) } */>
            <p> {props.name} </p>
            <p> s/ {props.price}</p>
        </div>
    );
}

export default Products;