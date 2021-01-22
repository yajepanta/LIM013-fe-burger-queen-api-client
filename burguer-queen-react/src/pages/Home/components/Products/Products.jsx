import React from 'react';
import './Products.css';

const Products = ({props, handleProduct}) => {
    //console.log('props', props.id);
    return (
        <div className="product-card" onClick={ (e) => handleProduct(props.id)}>
            <p> {props.name} </p>
            <p> S/. {props.price}</p>
        </div>
    );
}

export default Products;