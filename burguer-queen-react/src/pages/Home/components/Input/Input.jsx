import React from 'react';
import './Input.css';

const Input = ({ attribute, handleInput }) => {
    return (
        
            <input className='input-order'
                id={attribute.id}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}

                onChange={ (e) => handleInput(e.target.name, e.target.value)}
               
            ></input>

        
    );
};

export default Input;