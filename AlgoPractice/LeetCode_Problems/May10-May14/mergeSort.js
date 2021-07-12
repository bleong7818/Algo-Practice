var sortArray = function (nums) {
    if (nums.length <= 1) return nums;

    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);
    //ayyyyy
    //lmao
    return merge(sortArray(left), sortArray(right));
};

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return [...result, ...left, ...right];
}