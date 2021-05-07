var isPerfectSquare = function (num) {
    if (num === 1) return true;
    let i = 1;

    while (i < num) {
        if (num / i === i) return true;
        i++;
    }
    return false;
};