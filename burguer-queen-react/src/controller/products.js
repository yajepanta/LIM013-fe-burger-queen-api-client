const getAllProducts = () => {
    /* Retornar mensajes para status fallido 
    */
    return fetch('http://localhost:5000/products')
        .then((resp) => {return resp.json()})
        .catch(err => console.log(err));}

export default getAllProducts;