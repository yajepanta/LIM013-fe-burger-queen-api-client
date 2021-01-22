import React, { useEffect, useState} from 'react';
import { trackPromise} from 'react-promise-tracker'; /* TRACK PROMISE */
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
import Cookies from 'universal-cookie';
/* import Draggable, {DraggableCore} from 'react-draggable'; */

const Home = () => {

    /* productData es un array que contiene objetos (cada producto), por eso se le puede hacer map */
    const [orderArray, setOrderArray] = useState([]);
    const [client, setClient] = useState();
   /*  const [numberTable, setNumberTable] = useState(); */
    
    /* acá pasar el estado (objeto) como parámetro  */
    const [allProducts, setAllProducts] = useState([]);

    const returnCat = () => {
        const time = new Date().getHours();
        if (time < 15) {
            return 'breakfast'
        }
        else {
            return 'lunch'
        }
    }

    /*guardando el estado de la cat seleccionada* */
    const [catSelected, setCatSelected] = useState(returnCat());
    /* TRACK PROMISE */
    useEffect(()=>{
        /* console.log(window.Cookies.get("cookieSession")); */
        trackPromise(getAllProducts()
        .then(resp => { console.log('trackpromise'); return setAllProducts(resp)})
        .catch(err => console.log(err)));
    }, []);

    let totalPrice = [0];
    
    const filterProductsByType = (name) => {
        /* console.log('datafilter', allProducts);
        const productsByType = allProducts.filter(el => el.type===name);
        return setProductData(productsByType); */
        setCatSelected(name);
    };

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
            /* case 'numberTable': setNumberTable(value);
            break; */
        }
    }

    const handleProduct = (targetId, targetClassName) => {
        const productId = parseInt(targetId);
       
        if (productId > 0){ 
            /* objeto con los datos del producto a ingresar */
            const product = allProducts.find((el)=> {return el._id === productId});   
            
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
                            paramIcon="fas fa-coffee"/>
                    <Menu
                            text="ALMUERZOS"
                            id='lunch'
                            name='lunch'
                            filterProductsByType={filterProductsByType}
                            paramIcon="fas fa-hamburger"/> 

{/* Render list of products by type */}
                    <div className="products-list" /* onClick={ (e) => handleProduct(e.target.id) } */> 
                        {
                            allProducts.length > 0 &&
                            allProducts.filter(el => el.type===catSelected).map(product => {
                                //console.log("render")
                                return <Products 
                                            key={product._id}
                                            props={{
                                                "id": product._id,
                                                "name":product.name, 
                                                "price": product.price
                                            }} 
                                            handleProduct={handleProduct}/>
                            })
                        }

                    </div>
                    
                            
                </section>

{/* Orders section */}
  
                    <section className="order-container"> 
                        <div className="order-info">
                            <div className="row space-center">
                                <Label text="Mi orden" />
                            </div>
                            
                            <div className="row space-center">
                                <Label text="Mesa:" />
                                <Input attribute={{
                                    id: 'numberTable', 
                                    name: 'numberTable',
                                    type: 'text',
                                    placeholder: 'Mesa',
                                }}
                                handleInput={handleInput} />
                            </div>

                            <div className="row space-center">
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
                            <div className = "orders-list" onClick={ (e) => handleProduct(e.target.id, e.target.className) }>
                                {orderArray.map(el => { 
                                    el.total = el.price*el.qty;
                                    totalPrice.push(el.total);
                                    return <OrderList key={el._id} product={el} total={el.total} />})}
                            </div>
                            <Label className="order-total" text={`Total: S/.${totalPrice.reduce((a , b)=>{return a + b})}`}></Label>
                            {/* <label>Total: {total.reduce((a , b)=>{return a + b})}</label> */}
                            <button className="send-order" onClick={sendOrder}> Enviar a cocina</button>
                        </div>
                    </section>
                
            </div>
        </div>
    );
}

export default Home;