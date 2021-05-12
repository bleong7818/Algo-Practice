function pthFactor(n, p) {
    const factors = [];
    let i = 1;
    while (i <= n) {
        if (n % i === 0) factors.push(i);
        i++;
    }
    if (factors[p - 1]) {
        return factors[p - 1];
    }
    else {
        return 0;
    }
}