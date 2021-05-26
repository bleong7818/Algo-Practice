var subtractProductAndSum = function (n) {
    const stringVer = n.toString();

    let product = parseInt(stringVer[0]);
    let sum = parseInt(stringVer[0]);

    for (let i = 1; i < stringVer.length; i++) {
        const current = parseInt(stringVer[1]);
        product *= current;
        sum += current;
    }

    return product - sum;
};

const n = 234;

console.log(subtractProductAndSum(n));