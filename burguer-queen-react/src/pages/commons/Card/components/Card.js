import '../components/Card.css';

//console.log('tiempo',calculateDate(new Date(order.dateEntry), new Date(order.dateProcessed)));
const Card = ({status, calculateDate, props, modifyOrder}) => {
    const passTheTime = () => {
        const minutes = parseInt(calculateDate.substr(3))
        if(minutes > 30){
            return true
        }else{
            return false
        }
    }

    return(
        <div className={passTheTime()===true ? 'card red' : 'card' }>
            <div className='row flex-right'>{status === 'delivering' ? `Tiempo total: ${calculateDate}` : ''}</div>
            <div className='card-title flex center'>
                {/* <span>N°001</span> */}
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