var sortArrayByParity = function (A) {
    let nums = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            nums.unshift(A[i]);
        } else {
            nums.push(A[i]);
        }
    }
    return nums;
};