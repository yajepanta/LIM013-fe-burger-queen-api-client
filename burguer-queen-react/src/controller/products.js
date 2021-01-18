const getAllProducts = () => {
    /* Retornar mensajes para status fallido */
    return fetch('http://localhost:5000/products')
<<<<<<< HEAD
        .then((resp) => { return resp.json()})
        .catch(err => { console.log(err)})
    }
=======
        .then((resp) => {return resp.json()})
        .catch(err => console.log(err));}
>>>>>>> 62cd84a41de752e9683354761d83b881b3127715

export default getAllProducts;