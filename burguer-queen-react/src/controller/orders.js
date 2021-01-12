export const createOrder = ( token, body) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: {body}
    };

    fetch('http://localhost:5000/orders', options)
    .then((resp) => {
        if (resp.status === 200){
            return resp.json();
        }})
    .catch(err=>console.log('err', err));
};

export const allOrders = () => {
    console.log('orders');
}