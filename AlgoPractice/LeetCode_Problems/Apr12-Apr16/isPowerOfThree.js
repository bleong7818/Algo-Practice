var isPowerOfThree = function (n) {
    let i = 3;

    if (n <= 0) {
        return false;
    } else if (n === 1) {
        return true;
    }

    while (i <= n) {
        if (i === n) {
            return true;
        }

        i *= 3;
    }

    return false;
};