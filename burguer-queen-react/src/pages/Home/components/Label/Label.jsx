import React from 'react';
import './Label.css';
/* if IS_WAITER: no se edita el input */
const Label = ({ text }) => {
    return (
            <label> { text } </label>
    );
};

export default Label;