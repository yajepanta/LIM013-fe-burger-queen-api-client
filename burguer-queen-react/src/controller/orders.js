export const createOrder = ( token, body) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: {body}
    };
/* 192.168.1.116: */
    fetch('http://192.168.1.116:5000/orders', options)
    .then((resp) => {
        if (resp.status === 200){
            return resp.json();
        }})
    .catch(err=>console.log('err', err));
};

export const allOrders = () => {
    console.log('orders');
}