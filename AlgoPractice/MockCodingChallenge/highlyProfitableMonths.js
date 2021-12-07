function countHighlyProfitableMonths(stockPrices, k) {
    let profitable = 0;
    for (let i = 0; i < stockPrices.length - k + 1; i++) {
        let kMonths = stockPrices.slice(i, i + k);
        if (isIncreasing(kMonths)) {
            profitable++;
        }
    }
    return profitable;
}

function isIncreasing(months) {
    for (let i = 0; i < months.length - 1; i++) {
        let current = months[i];
        let next = months[i + 1];
        if (current >= next) {
            return false;
        }
    }
    return true;
}
let prices = [1, 2, 3, 3, 4, 5];
