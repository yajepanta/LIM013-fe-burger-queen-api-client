export const createOrder = ( token, body) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: {body}
    };
<<<<<<< HEAD
/* 192.168.1.116: */
=======

>>>>>>> 62cd84a41de752e9683354761d83b881b3127715
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