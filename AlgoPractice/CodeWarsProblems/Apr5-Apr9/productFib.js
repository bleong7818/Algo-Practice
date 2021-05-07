function productFib(prod) {
    let startingFib = [0, 1, 1];
    while ((startingFib[startingFib.length - 1]) * (startingFib[startingFib.length - 2]) < prod) {
        const newFib = (startingFib[startingFib.length - 1]) + (startingFib[startingFib.length - 2]);
        startingFib.push(newFib);
    }

    const firstProduct = startingFib[startingFib.length - 1] * startingFib[startingFib.length - 2];
    const secondProduct = startingFib[startingFib.length - 2] * startingFib[startingFib.length - 3];

    if (firstProduct === prod) {
        return [startingFib[startingFib.length - 2], startingFib[startingFib.length - 1], true];
    }

    if (secondProduct === prod) {
        return [startingFib[startingFib.length - 3], startingFib[startingFib.length - 2], true];
    }
    return [startingFib[startingFib.length - 2], startingFib[startingFib.length - 1], false];
}