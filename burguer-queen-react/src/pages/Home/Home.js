import React, { useState} from 'react';
import '../Home/Home.css';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';
import OrderList from './components/OrderList/OrderList';

/* import Draggable, {DraggableCore} from 'react-draggable'; */

const Home = () => {
    /* productData es un array que contiene objetos (cada producto), por eso se le puede hacer map */
    const [productData, setProductData] = useState([]);

    /* orderArray debería ser un array de objetos con datos de producto (más qty) */
    const [orderArray, setOrderArray] = useState([]);
    /* const [total, setTotal] = useState(); */
    const [client, setClient] = useState();
    const [numberTable, setNumberTable] = useState();
    const [waiter, setWaiter] = useState();
    let total = [0];

    /* debe ser un array de objetos (con los productos) 
    se debe llamar al inciar la fx HOME*/
 /* const getproductData = async () => await fetch('http://localhost:5000/products'); */
        

    const getproductData = () => fetch('http://localhost:5000/products')
            .then((resp) => {return resp.json()})
        
            .catch(err=> console.log(err));
    
    /* setProductData(getproductData) */

    const filterByCategory = async (productData,name) => {
        
        return console.log( await getproductData());
        /* fetch('http://localhost:5000/products')

    const filterByCategory = (name) => {
        fetch('http://localhost:5000/products')
        .then((resp) => resp.json())
        .then((resp) => resp.filter(el => el.type===name))
        .then (resp => setProductData(resp))
        .catch(err=> console.log(err));*/
    }; 
    
    /* useEffect(()=> {filterByCategory("breakfast");})  */
    /* Esto se enviará en sendOrder */
     /* const product = {
            userId: null,
            client: null,
            acá recibe orderArray (el array de productos de la orden), y enviamos solo id y qty
            products: [{
                productId: null,
                qty: null,
            }]
        }; */

    const sendOrder = (name) => {
        /* const val = name.value; */
        return console.log('orden enviada:', name);

    };
    const handleInput = (name, value) => {
        console.log(name, value);
        switch (name){
            default: console.log(name, value);
            break
            case 'waiter': setWaiter(value);
            break;
            case 'client': setClient(value);
            break;
            case 'numberTable': setNumberTable(value);
            break;
        }
    }

   /*  const products = orderArray.map(el => {
        const prueba= {
            _id: el._id,
            qty: el.qty,
        }
        //console.log('prueba', prueba);
        return prueba 
    })
    const pedido = {
        userId: null,
        waiter, 
        client,
        products
    } */

    const handleInput = (name, value) => {
        switch (name){
            case 'waiter': setWaiter(value);
            break;
            case 'client': setClient(value);
            break;
            case 'numberTable': setNumberTable(value);
            break;
        }
    }

    const product = order.map(el => {
        let prueba= {
            _id: el._id,
            qty: el.qty,
        }
        //console.log('prueba', prueba);
        return prueba 
    })
    const pedido = {
        userId: null,
        waiter, 
        client,
        product
    }

    console.log('product', pedido);

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
                    Retorna: set producto;
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
                        {product.qty++;
                        product.total=0;
                        setOrderArray(prevState => [...prevState, product]);
                        const orderList = [...new Set(orderArray)]; 
                        return setOrderArray(orderList); }       
                case ("minusOne"): 
                        {product.qty--;
                        product.total=0;
                        setOrderArray(prevState => [...prevState, product]);
                        const orderList = [...new Set(orderArray)]; 
                        return setOrderArray(orderList);}
                case ("deleteProduct"):
                        const orderWithoutProduct = orderArray.filter(el => el._id !== productId);
                        product.total=0;
                        return setOrderArray(orderWithoutProduct);
            }


            /* if (orderArray.filter(el => el._id === productId).length > 0 || targetClassName === "plusOne") {
                product.qty++;
                console.log('me repito');
                setOrderArray(prevState => [...prevState, product]);
                const orderList = [...new Set(orderArray)]; 
                return setOrderArray(orderList);

            }  */
            /* si el producto a agregar ya se encuentra en la lista de órdenes Y se le aplica minusOne
            debe quitarle uno a la cantidad */
           /*  if (orderArray.filter(el => el._id === productId).length > 0 && targetClassName === "minusOne"){
                product.qty--;
                console.log('me quitan');
                setOrderArray(prevState => [...prevState, product]);
                const orderList = [...new Set(orderArray)]; 
                return setOrderArray(orderList);
            }else {
                product.qty = 1;
                console.log('no me repito');
                return setOrderArray(prevState => [...prevState, product]);
            } */
        }
    }

    return (   
        <div>
            <Nav className="nav-bar"/>
            <div className="home-view">
                <section className="products-container">
                    <Menu
                            text='Desayunos'
                            id='breakfast'
                            name='breakfast'
                            filterByCategory={filterByCategory} />
                    <Menu
                            text='Almuerzos'
                            id='lunch'
                            name='lunch'
                            filterByCategory={filterByCategory}
                            productData={productData} /> 

{/* Render list of products by type */}
                    <div className="products-list" /* onClick={ (e) => handleProduct(e.target.id) } */> 
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
                    
                            
                </section>

{/* Orders section */}
  
                    <section className="order-container"> 
                        <div className="order-info" onChange={e=>handleInput(e.target.name, e.target.value)}>
                            <div className="row">
                                <Label text="MI ORDEN" />
                            </div>
{/* almacenar valores en state Client/order Data? */}

                            <div className="row">
                                <Label text="Mesero:" />
                                <Input 
                                handleInput={handleInput}
                                attribute={{
                                    id: 'waiter',
                                    name: 'waiter',
                                    type: 'text',
                                    placeholder: 'Mesero',
                                }} />
                            </div>
                            
                            <div className="row">
                                <Label text="Mesa:" />
                                <Input 
                                handleInput={handleInput}
                                attribute={{
                                    id: 'numberTable', 
                                    name: 'numberTable',
                                    type: 'text',
                                    placeholder: 'Mesa',
                                }} />
                            </div>

                            <div className="row">
                                <Label text="Cliente:" />
                                <Input 
                                handleInput={handleInput}
                                attribute={{
                                    id: 'client',
                                    name: 'client',
                                    type: 'text',
                                    placeholder: 'Cliente',
                                   
                                }} />
                            </div>
        
                        </div>
                        {/* Render order */}
                        <div className="order-products">
                            <ul onClick={ (e) => handleProduct(e.target.parentNode.id, e.target.className) }>
                                {orderArray.map(el => { 
                                    el.total = el.price*el.qty;
                                    total.push(el.total);
                                    return <OrderList key={el._id} product={el} total={el.total} />})}
                            </ul>
                            <Label className="order-total" text={`Total: s/${total.reduce((a , b)=>{return a + b})}`}></Label>
                            {/* <label>Total: {total.reduce((a , b)=>{return a + b})}</label> */}
                            <button className="send-order" onClick={sendOrder}> Enviar a cocina</button>
                        </div>
                    </section>
                
            </div>
        </div>
    );
}

export default Home;
