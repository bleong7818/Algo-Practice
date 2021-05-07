var reverseBits = function (n) {
    let bits = n.toString(2).padStart(32, '0').split('').reverse().join('');
    return parseInt(bits, 2);
};