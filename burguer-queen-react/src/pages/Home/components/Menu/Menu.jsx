import React from 'react';
import './Menu.css';

/* Debe recibir 1 string, que será la categoría de menú que hay 
y tb otro texto con el nombre de la categoría, que será vista
on click: va a filtrar */
const Menu = ({name, id, text, filterByCategory}) => {
    return (
            <button className="menu-filter"
                name={name}
                id={id}
                type="button"
                onClick={(e) => {filterByCategory(e.target.name)}}> {text} 
            </button>
    );
};

export default Menu;