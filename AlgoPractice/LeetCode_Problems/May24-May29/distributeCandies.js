var distributeCandies = function (candies, num_people) {
    const res = new Array(num_people).fill(0);
    let count = 0;
    while (candies > 0) {
        const idx = count++ % num_people;
        const temp = Math.min(count, candies);
        res[idx] += temp;
        candies -= temp;
    }

    return res;
};