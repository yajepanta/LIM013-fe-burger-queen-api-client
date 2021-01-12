import React from 'react';
import './Input.css';

const Input = ({ attribute, handleInput, param}) => {
    return (
        
            <input
                id={attribute.id}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}
                onChange={ (e) => handleInput(e.target.name, e.target.value)}
                className={ param ? 'input-error' : 'input-order'}> 
            </input>
        
    );
};

export default Input;