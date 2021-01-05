import React from 'react';
import '../Home/Home.css';
import Label from '../../commons/Input/Label/Label';
import Input from '../../commons/Input/Input';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';

const Home = () => {
    const filterByCategory = (name) => {
        fetch('http://localhost:5000/products')
        .then((resp) => resp.json())
        .then((resp) => resp.filter(el => el.type===name))
        .catch(err=> console.log(err));
    };

    return (   
        <div>
            <Nav className="nav-bar"/>
            <div className="home-view">
                <div className="products">
                    <Menu
                            text='Desayunos'
                            id='dia'
                            name='breakfast'
                            filterByCategory={filterByCategory} />
                    <Menu
                            text='Almuerzos'
                            id='lunch'
                            name='lunch'
                            filterByCategory={filterByCategory} />        
                    <Products text='productos'/>        
                </div>

                <div className="order">
                    <div className="order-container">
                        <div className="order-info">
                            <div className="row">
                                <Label text="MI ORDEN" />
                            </div>

                            <div className="row">
                                <Label text="Mesero:" />
                                <Input attribute={{
                                    id: 'waiter',
                                    name: 'waiter',
                                    type: 'text',
                                    placeholder: 'Mesero',
                                }} />
                            </div>
                            
                            <div className="row">
                                <Label text="Mesa:" />
                                <Input attribute={{
                                    id: 'numberTable', 
                                    name: 'numberTable',
                                    type: 'text',
                                    placeholder: 'Mesa',
                                }} />
                            </div>

                            <div className="row">
                                <Label text="Cliente:" />
                                <Input attribute={{
                                    id: 'client',
                                    name: 'client',
                                    type: 'text',
                                    placeholder: 'Cliente',
                                }} />
                            </div>
                            
                        </div>
                        <div className="order-products">
                                <button className="send-order"> Enviar a cocina</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
