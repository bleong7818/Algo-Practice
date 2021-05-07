var fib = function (n) {
    // at the start it would return if n is === to 0 or 1
    if (n == 0 || n == 1) {
        return n;
    }

    let first = 0;
    let second = 1;
    let total = null;

    for (let i = 2; i <= n; i++) {
        total = first + second;
        first = second;
        second = total;
    }
    return total;
};