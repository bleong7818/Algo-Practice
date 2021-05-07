var findLHS = function (nums) {
    const map = new Map();

    for (const num of nums) {
        if (!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
    }

    let res = 0;

    for (const [num, count] of map) {
        let down = map.get(num - 1);

        if (down) {
            res = Math.max(count + down, res);
        }
    }
    return res;
};