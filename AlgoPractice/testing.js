function getMinLength(a, k) {
    // Write your code here
    let length = a.length;

    let maxxedOut = false;

    for (let i = 0; i < length; i++) {
        // maxxedOut = true;
        let current = a[i];
        let next = a[i + 1];
        // let behind = a[i -1];
        let product = current * next;
        // debugger
        if (product <= k) {
            a[i] = product;
            a.splice(i + 1, 1);
            i--;
            debugger
        }
        // debugger
    }
    // debugger
    console.log(a);
    return a.length;
}

//sigh

let array = [2, 3, 3, 7, 3, 5];
let k = 20;
console.log(getMinLength(array, k));
