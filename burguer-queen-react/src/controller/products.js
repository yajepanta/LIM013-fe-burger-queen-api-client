const getAllProducts = () => {
    /* Retornar mensajes para status fallido */
    return fetch('http://192.168.1.116:5000/products')
        .then((resp) => {return resp.json()})
        .catch(err => console.log(err));}

export default getAllProducts;