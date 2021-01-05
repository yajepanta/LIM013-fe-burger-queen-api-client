import React, { useState} from 'react';
import '../Home/Home.css';
import Label from '../../commons/Input/Label/Label';
import Input from '../../commons/Input/Input';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';

const Home = () => {
    const [productData, setProductData] = useState([]);
    const [order, setOrder] = useState([]);
   
    const filterByCategory = (name) => {
        fetch('http://localhost:5000/products')
        .then((resp) => resp.json())
        .then((resp) => resp.filter(el => el.type===name))
        .then (resp => setProductData(resp))
        .catch(err=> console.log(err));
    };
    
    const handleProduct = (id) => {
        const productId = parseInt(id)
        if (productId > 0){ 
            const orders = productData.filter((el)=> {return el._id === productId;});
            const repetido = order.forEach(el => {return console.log(el)})
            console.log('lista de ordenes:', order, 'typeof order', typeof order, 'array de repetidos:', repetido);
            /* if (repetido.length > 1) {
                console.log('me repito');
            } else {
                console.log('no me repito');
            } */
            /* console.log('order:', order, 'orders:', orders); */
        return setOrder(prevState => [...prevState, orders]);;
        }
    }

    return (   
        <div>
            <Nav className="nav-bar"/>
            <div className="home-view">
                <div className="products" onClick={ (e) => handleProduct(e.target.id) }>
                    <Menu
                            text='Desayunos'
                            id='breakfast'
                            name='breakfast'
                            filterByCategory={filterByCategory} />
                    <Menu
                            text='Almuerzos'
                            id='lunch'
                            name='lunch'
                            filterByCategory={filterByCategory} /> 

                    {productData.map(product => {
                        return <Products 
                                    key={product._id}
                                    props={{
                                        "id": product._id,
                                        "name":product.name, 
                                        "price": product.price
                                    }} 
                                    handleProduct={handleProduct}/>
                    })}
                            
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
