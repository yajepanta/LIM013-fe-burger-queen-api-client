import '../ChefPending/ChefPending.css';

import Nav from '../commons/Nav/Nav';
import Card from '../../pages/commons/Card/components/Card.js';

const ChefPending = ()  => {
    return (
        <div>
            <Nav className="nav-bar"/>
            <div className='card-container'>
                <Card></Card>
            </div>
        </div>
        
    )
}

export default ChefPending;