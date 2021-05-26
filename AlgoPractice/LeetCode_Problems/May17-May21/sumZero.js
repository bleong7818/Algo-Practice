var sumZero = function (n) {
    let res = [];

    if (n % 2 !== 0) {
        res.push(0);
        n -= 1;
    }

    while (n--) {
        res.push(n, -n);
        n--;
    }
    return res;
};

var sumZero = function (n) {
    let res = [];

    if (n % 2 === 1) {
        res.push(0);
        n--;
    }

    while (n > 0) {
        res.push(n, -n);
        n -= 2;
    }
    return res;
}