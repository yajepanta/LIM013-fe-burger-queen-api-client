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

/**Traer todas las ordenes */
export const getAllOrders = () => {
    return fetch('http://localhost:5000/orders')
        .then((resp) => { return resp.json() })
        .then((data) => { console.log('datacontroller', data); return data})
        .catch(err => console.log('err', err))
}