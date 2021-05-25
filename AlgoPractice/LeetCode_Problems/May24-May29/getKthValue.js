var getKth = function (lo, hi, k) {

    let steps = (x) => {
        let result = 0;
        while (x != 1) {
            x = x % 2 ? 3 * x + 1 : x / 2;
            result++;
        }
        return result;
    }

    let q = [];

    for (let i = lo; i < hi + 1; i++) {
        q.push([i, steps(i)]);
    }

    let comparator = (a, b) => a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]
    q.sort(comparator);

    return q[k - 1][0];
};