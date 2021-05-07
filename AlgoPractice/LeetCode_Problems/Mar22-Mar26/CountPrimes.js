var countPrimes = function (n) {
    let primes = 0;
    let start = 0;
    while (start < n) {
        if (isPrime(start)) {
            primes += 1;
        }
        start += 1;
    }
    return primes;
};

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    let test = 2;
    while (test < num) {
        if (num % test === 0) {
            return false;
        }
        test += 1;
    }
    return true;
}

//faster solution;
var countPrimes = function (n) {
    if (n <= 2) return 0;

    function isPrime(num) {
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    let count = 1;
    for (let i = 3; i < n; i += 2) {
        if (isPrime(i)) count += 1;
    }
    return count;
};

console.log(countPrimes(499979));