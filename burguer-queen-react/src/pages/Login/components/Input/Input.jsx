import React from 'react';
import './Input.css';

const Input = ({ attribute, handleChange, param}) => {
    return (
        
            <input
                id={attribute.id}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}
                onChange={ (e) => handleChange(e.target.name, e.target.value)}
                className={ param ? 'input-error' : ''}> 
            </input>
        
    );
};

export default Input;