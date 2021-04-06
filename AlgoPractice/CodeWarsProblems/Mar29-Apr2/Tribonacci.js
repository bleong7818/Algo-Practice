function tribonacci(signature, n) {
    if (n === 0) return [];
    if (n === 1) return [signature[0]];
    if (n === 2) return signature.slice(0, 2);
    if (n === 3) return signature;

    let newArray = signature;
    while (signature.length < n) {
        const newNum = signature[signature.length - 1] + 
        signature[signature.length - 2] + 
        signature[signature.length - 3];
        newArray.push(newNum);
    }
    return newArray;
}