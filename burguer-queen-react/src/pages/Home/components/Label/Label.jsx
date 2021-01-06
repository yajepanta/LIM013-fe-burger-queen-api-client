import React from 'react';
import './Label.css';
/* if IS_WAITER: no se edita el input */
const Label = ({ text, param }) => {
    return (
            <label className={ param ? 'label-error' : ''}> { text } </label>
    );
};

export default Label;