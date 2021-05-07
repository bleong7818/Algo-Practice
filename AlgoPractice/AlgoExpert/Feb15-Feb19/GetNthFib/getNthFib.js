function getNthFib1(n) {
    // Write your code here.
    if (n === 2) {
        return 1;
    } else if (n === 1) {
        return 0;
    } else {
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
}

function getNthFib2(n, memoize = { 1: 0, 2: 1 }) {
    if (n in memoize) {
        return memoize[n];
    } else {
        memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
        return memoize[n];
    }
}