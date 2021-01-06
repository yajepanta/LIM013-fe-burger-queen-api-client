import React from 'react';
import './Label.css';

const Label = ({ text, param }) => {
    return (
            <label className={ param ? 'label login label-error' : 'label-login'}> { text } </label>
    );
};

export default Label;