var hammingDistance = function (x, y) {
    const xBit = x.toString(2);
    const yBit = y.toString(2);
    let i = xBit.length - 1;
    let j = yBit.length - 1;
    let res = 0;

    while (i >= 0 || j >= 0) {
        res += xBit[i] ^ yBit[j];
        i--;
        j--;
    }
    return res;
};