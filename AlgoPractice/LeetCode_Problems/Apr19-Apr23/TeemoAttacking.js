var findPoisonedDuration = function (timeSeries, duration) {
    let sum = 0;
    let pre = timeSeries[0];

    for (const num of timeSeries) {
        const last = num - pre;
        if (sum && last < duration) sum += -duration + last;
        sum += duration;
        pre = num;
    }
    return sum;
};