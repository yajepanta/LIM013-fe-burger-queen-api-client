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
    /* order debería ser un array de objetos con datos de producto (más qty) */
    const [order, setOrder] = useState([]);

    console.log('lista de productos únicos', order)

    const filterByCategory = (name) => {
        fetch('http://localhost:5000/products')
        .then((resp) => resp.json())
        .then((resp) => resp.filter(el => el.type===name))
        .then (resp => setProductData(resp))
        .catch(err=> console.log(err));
    };
    
    /* useEffect(()=> {filterByCategory("breakfast");})  */
    /* Esto se enviará en sendOrder */
     /* const product = {
            userId: null,
            client: null,
            acá recibe order (el array de productos de la orden), y enviamos solo id y qty
            products: [{
                productId: null,
                qty: null,
            }]
        }; */
    const sendOrder = () => {
        return console.log('orden enviada');
    };

    const handleProduct = (targetId, targetClassName) => {
        const productId = parseInt(targetId);
       
        if (productId > 0){ 
            /* objeto con los datos del producto a ingresar */
            const product = productData.find((el)=> {return el._id === productId;});    
            /* si el producto a ingresar ya se encuentra en el array de productos, solo aumentará +1 qty 
            mandar parámetro name, si es minusOne, lo que hará será quitar uno a la cantidad de productos
            si es plusOne, aumentará
            
            agregar: if product.qty = 0, delete*/
            switch (targetClassName) {
                default:
                    if (order.filter(el => el._id === productId).length > 0) {
                        product.qty++;
                        console.log('me repito');
                        setOrder(prevState => [...prevState, product]);
                        const orderList = [...new Set(order)]; 
                        return setOrder(orderList);
                    } else {
                        product.qty = 1;
                        console.log('no me repito');
                        return setOrder(prevState => [...prevState, product]);
                    };
                    
                case ("plusOne"): 
                    if (order.filter(el => el._id === productId).length > 0) {
                        product.qty++;
                        console.log('me repito');
                        setOrder(prevState => [...prevState, product]);
                        const orderList = [...new Set(order)]; 
                        return setOrder(orderList);
                    };
                break
                case ("minusOne"): 
                if (order.filter(el => el._id === productId).length > 0) {
                    product.qty--;
                    console.log('me quitan');
                    setOrder(prevState => [...prevState, product]);
                    const orderList = [...new Set(order)]; 
                    return setOrder(orderList);
                };
                break
                case ("deleteProduct"):
                    const orderWithoutProduct = order.filter(el => el._id !== productId);
                    setOrder(orderWithoutProduct);
                    return console.log('deleted debería ser un array sin ese objeto', orderWithoutProduct, typeof orderWithoutProduct)
            }


            /* if (order.filter(el => el._id === productId).length > 0 || targetClassName === "plusOne") {
                product.qty++;
                console.log('me repito');
                setOrder(prevState => [...prevState, product]);
                const orderList = [...new Set(order)]; 
                return setOrder(orderList);

            }  */
            /* si el producto a agregar ya se encuentra en la lista de órdenes Y se le aplica minusOne
            debe quitarle uno a la cantidad */
           /*  if (order.filter(el => el._id === productId).length > 0 && targetClassName === "minusOne"){
                product.qty--;
                console.log('me quitan');
                setOrder(prevState => [...prevState, product]);
                const orderList = [...new Set(order)]; 
                return setOrder(orderList);
            }else {
                product.qty = 1;
                console.log('no me repito');
                return setOrder(prevState => [...prevState, product]);
            } */
        }
    }

    return (   
        <div>
            <Nav className="nav-bar"/>
            <div className="home-view">
                <div className="products">
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

{/* Render list of products by type */}
                    <div className="products-container" onClick={ (e) => handleProduct(e.target.id) }> 
                        {productData.map(product => {
                            return <Products 
                                        key={product._id}
                                        props={{
                                            "id": product._id,
                                            "name":product.name, 
                                            "price": product.price
                                        }} 
                                        /* handleProduct={handleProduct} *//>
                        })}
                    </div>
                    
                            
                </div>

{/* Orders section */}

                <div className="order">
                    <div className="order-container">
                        <div className="order-info">
                            <div className="row">
                                <Label text="MI ORDEN" />
                            </div>
{/* almacenar valores en state Client/order Data? */}
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
                        {/* Render order */}
                        <div className="order-products">
                            <ul onClick={ (e) => handleProduct(e.target.parentNode.id, e.target.className) }>
                                {order.map(el => { return <OrderList key={el._id} product={el} />})}
                            </ul>
                            <Label text="Total:">{/* ALMACENAR EL VALOR TOTAL EN LA ORDEN {order.reduce(el => el.price)} */}</Label>
                            <button className="send-order" onClick={sendOrder}> Enviar a cocina</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
