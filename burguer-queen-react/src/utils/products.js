const deleteProduct = (orderArray, productId) => {
    return orderArray.filter(el => el._id !== productId);
};

export default deleteProduct;
