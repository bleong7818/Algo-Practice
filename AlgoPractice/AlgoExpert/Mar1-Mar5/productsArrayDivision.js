function arrayOfProducts(array) {
    let productArray = [];
    let currentProduct = array[0];
    for (let i = 1; i < array.length; i++) {
        currentProduct *= array[i];
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            productArray.push(0);
        }
        else {
            productArray.push(currentProduct / array[i]);
        }
    }

    return productArray;
}