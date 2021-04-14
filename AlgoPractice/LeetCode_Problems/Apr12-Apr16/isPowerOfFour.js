var isPowerOfFour = function (n) {
    let i = 4;

    if (n <= 0) {
        return false;
    } else if (n === 1) {
        return true;
    }

    while (i <= n) {
        if (i === n) {
            return true;
        }

        i *= 4;
    }
    return false;

};