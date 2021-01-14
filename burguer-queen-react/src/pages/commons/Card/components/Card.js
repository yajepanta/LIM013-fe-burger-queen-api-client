
/* const date =  new Date('14/1/2021 13:05:38');
console.log('formatLocal', date.toLocaleString()); */
const datePedido = new Date();
const dateEntrega = new Date();

const Card = () => {
    return(
        <div>{calculateDate(datePedido, dateEntrega)}</div>
    )
}

export default Card;