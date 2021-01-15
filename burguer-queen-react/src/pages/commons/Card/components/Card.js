import '../components/Card.css';

const Card = () => {
    return(

        <div className='card'>
            <div className='card-title flex'>
                <span>N° 001</span>
                <span className='chip-estado'>Pendiente</span>
            </div>
            <hr></hr>
            <div className='card-body'>
                <div className='row flex'>
                    <span className='product bold'>PRODUCTO</span>
                    <span className='bold'>CANTIDAD</span>
                </div>
                <div className='row flex'>
                    <span className='product'>Hamburguesa de queso</span>
                    <span className='count'>2</span>
                </div>
                <div className='row flex'>
                    <span className='product'>Papas fritas</span>
                    <span className='count'>1</span>
                </div>
                <button className='btn-send'>Enviar</button>
            </div>
        </div>
        
    )
}

export default Card;