var isHappy = function (n) {
    let sum = 0;
    let seen = [];

    while (sum !== 1) {
        for (let num of n.toString().split('')) {
            let numVersion = parseInt(num);
            sum += numVersion * numVersion;
        }

        if (sum === 1) return true;
        if (seen.includes(sum)) return false;
        seen.push(sum);
        n = sum;
        sum = 0;
    }

    return true;
};