import '../components/Card.css';

//console.log('tiempo',calculateDate(new Date(order.dateEntry), new Date(order.dateProcessed)));
const Card = ({status, calculateDate, props, modifyOrder}) => {

    return(
        <div className='card'>
            <div className='row'>{status === 'delivering' ? `Tiempo total: ${calculateDate}` : ''}</div>
            <div className='card-title flex'>
                <span>N°001</span>
                <span className={status==='pending' ? 'chip-estado' : 'chip-estado green'}>{status}</span>
            </div>
            <hr></hr>
            <div className='card-body'>
                <div className='row flex'>
                    <span className='product bold'>PRODUCTO</span>
                    <span className='bold'>CANTIDAD</span>
                </div>
               
                {props.products.map(product => <li className='row flex'><span className='product'> • {product.name}</span><span className='qty'>{product.qty}</span></li>)} 
                
            </div>
            <button className='btn-send' onClick = {(e) => modifyOrder(props._id)}>Enviar</button>
        </div>
    )
}

export default Card;