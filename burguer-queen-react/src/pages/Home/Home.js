import React, { useCallback, useEffect, useState} from 'react';
import '../Home/Home.css';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import Nav from '../commons/Nav/Nav.js';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';
import OrderList from './components/OrderList/OrderList';
import getAllProducts from '../../controller/products.js'
import {createOrder } from '../../controller/orders.js';
import deleteProduct from '../../utils/products.js';
/* import Draggable, {DraggableCore} from 'react-draggable'; */

const Home = () => {

    /* productData es un array que contiene objetos (cada producto), por eso se le puede hacer map */
    const [orderArray, setOrderArray] = useState([]);
    const [productData, setProductData] = useState(["breakfast"]);
    const [client, setClient] = useState();
    const [numberTable, setNumberTable] = useState();
    
    /* acá pasar el estado (objeto) como parámetro  */
    const [allProducts, setAllProducts] = useState([]);
    
    useEffect(()=>{
        getAllProducts()
        .then(resp => {return setAllProducts(resp)})
        .catch(err => console.log(err));
    }, []);

    let totalPrice = [0];
    
    const filterProductsByType = useCallback((name) => {
        //console.log('allProducts', allProducts);
        const productsByType = allProducts.filter(el => el.type===name);
        return setProductData(productsByType);
    }, [allProducts]);

    useEffect(()=>{
        const time = new Date().getHours();
        if (time < 15) {
            filterProductsByType("breakfast");
        }
        else {
            filterProductsByType("lunch");
        }
    }, [filterProductsByType]);

    const sendOrder = () => {
    /* createOrder recibe null porque falta el id de usuario*/
    /* if orderArray.lenght = 0 no se hace la peticion */
    const products = orderArray.map(el=> {return ({ productId: el._id, qty: el.qty,})})
    const body = {
        userId: null,
        client: client,
        products: products
    };
        return createOrder("null", body);
    };
    const handleInput = (name, value) => {
        switch (name){
            default: console.log("falta completar");
            break;
            case 'client': setClient(value);
            break;
            case 'numberTable': setNumberTable(value);
            break;
        }
    }

    const handleProduct = (targetId, targetClassName) => {
        const productId = parseInt(targetId);
       
        if (productId > 0){ 
            /* objeto con los datos del producto a ingresar */
            const product = productData.find((el)=> {return el._id === productId;});   
            
            
            switch (targetClassName) {
                default:
                    /* SE REPITE: 
                    nueva fx (
                        params: product (objeto. el producto en específico, que ya lo buscamos x id), 
                            )
                        product.qty++;
                        product.total=0;
                        setOrderArray
                    Retorna: set producto    
                     */
                    if (orderArray.filter(el => el._id === productId).length > 0) {
                        product.qty++;
                        product.total=0;
                        setOrderArray(prevState => [...prevState, product]);
                        const orderList = [...new Set(orderArray)]; 
                        return setOrderArray(orderList);
                    } else {
                        product.qty = 1;
                        product.total=0;
                        return setOrderArray(prevState => [...prevState, product]);
                    };                
                case ("plusOne"): 
                        {console.log("me suman o ya existo");
                        product.qty++;
                        product.total=0;
                        setOrderArray(prevState => [...prevState, product]);
                        const orderList = [...new Set(orderArray)]; 
<<<<<<< HEAD
                        return setOrderArray(orderList); }       
                case ("minusOne"): 
                    {
                        product.qty--;
                        product.total = 0;
                        if(product.qty > 0){
                            setOrderArray(prevState => [...prevState, product]);
                            const orderList = [...new Set(orderArray)]; 
                            return setOrderArray(orderList)
                        }else{
                            alert('No puede ser negativo...');
                            product.qty = 0;
                            //return setOrderArray(orderList)
                        }
                    }
=======
                        return setOrderArray(orderList); }    
                 case ("minusOne"): 
                            product.qty--;
                            product.total = 0;
                            if(product.qty > 0){
                                setOrderArray(prevState => [...prevState, product]);
                                const orderList = [...new Set(orderArray)]; 
                                return setOrderArray(orderList)
                            }else{
                                alert('No puede ser negativo...');
                                product.qty = 0;
                                //return setOrderArray(orderList)
                            }
                        break
>>>>>>> 62cd84a41de752e9683354761d83b881b3127715
                case ("deleteProduct"):
                        return setOrderArray(deleteProduct(orderArray, productId));
            }
        }
    }

    return (   
        <div>
            <Nav className="nav-bar"/>
            <div className="home-view">
                <section className="products-container">
                    <Menu
                            text="DESAYUNOS"
                            id="breakfast"
                            name="breakfast"
                            filterProductsByType={filterProductsByType}
<<<<<<< HEAD
                            paramIcon="fas fa-coffee" />
=======
                            paramIcon="fas fa-coffee"/>
>>>>>>> 62cd84a41de752e9683354761d83b881b3127715
                    <Menu
                            text="ALMUERZOS"
                            id='lunch'
                            name='lunch'
                            filterProductsByType={filterProductsByType}
                            paramIcon="fas fa-hamburger"/> 

{/* Render list of products by type */}
                    <div className="products-list" /* onClick={ (e) => handleProduct(e.target.id) } */> 
                        {productData.map(product => {
                            //console.log("render")
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
                    
                            
                </section>

{/* Orders section */}
  
                    <section className="order-container"> 
                        <div className="order-info">
                            <div className="row">
                                <Label text="Mi orden" />
                            </div>
                            
                            <div className="row">
                                <Label text="Mesa:" />
                                <Input attribute={{
                                    id: 'numberTable', 
                                    name: 'numberTable',
                                    type: 'text',
                                    placeholder: 'Mesa',
                                }}
                                handleInput={handleInput} />
                            </div>

                            <div className="row">
                                <Label text="Cliente:" />
                                <Input 
                                    attribute={{
                                        id: 'client',
                                        name: 'client',
                                        type: 'text',
                                        placeholder: 'Cliente',
                                    }} 
                                    handleInput={handleInput}/>
                            </div>
        
                        </div>
{/* Render order */}
                        <div className="order-products">
                            <div onClick={ (e) => handleProduct(e.target.parentNode.id, e.target.className) }>
                                {orderArray.map(el => { 
                                    el.total = el.price*el.qty;
                                    totalPrice.push(el.total);
                                    return <OrderList key={el._id} product={el} total={el.total} />})}
                            </div>
                            <Label className="order-total" text={`Total: s/${totalPrice.reduce((a , b)=>{return a + b})}`}></Label>
                            {/* <label>Total: {total.reduce((a , b)=>{return a + b})}</label> */}
                            <button className="send-order" onClick={sendOrder}> Enviar a cocina</button>
                        </div>
                    </section>
                
            </div>
        </div>
    );
}

export default Home;