import React from 'react';
import './Label.css';

const Label = ({ text, param }) => {
    return (
            <label className={ param ? 'label-error' : ''}> { text } </label>
    );
};

export default Label;