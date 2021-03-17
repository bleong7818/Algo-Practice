var hammingWeight = function (n) {
    let ones = 0;
    let string = n.toString(2);
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '1') {
            ones += 1;
        }
    }
    return ones;
};

//Alt one-liner but slower
var hammingWeight = function (n) {
    return n.toString(2).split('').filter((ele) => ele === '1').length;
};