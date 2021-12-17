function getMinLength(a, k) {
    let length = a.length;

    for (let i = 0; i < length; i++) {
        let current = a[i];
        let next = a[i + 1];
        let product = current * next;
        if (product <= k) {
            a[i] = product;
            a.splice(i + 1, 1);
            i--;
        }
    }
    console.log(a);
    return a.length;
}
//hello, hello, hello, hello
let array = [2, 3, 3, 7, 3, 5];
let k = 20;
console.log(getMinLength(array, k));
