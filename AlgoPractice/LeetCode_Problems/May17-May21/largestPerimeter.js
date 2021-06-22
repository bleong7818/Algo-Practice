var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length - 2; i++) {
        let sides = nums.slice(i, i + 3);
        if (isTriPossible(sides)) {
            return sides.reduce((acc, cur) => acc + cur);
        }
    }
    return 0;
};

function isTriPossible(sideArray) {
    const [a, b, c] = sideArray;
    return ((a + b > c) &&
        (b + a > c) &&
        (c + b > a));
}