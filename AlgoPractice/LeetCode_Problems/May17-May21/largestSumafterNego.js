var largestSumAfterKNegations = function (A, K) {
    while (K > 0) {
        let v = Math.min(...A);
        let i = A.indexOf(v);
        A[i] = - A[i];
        K--;
    }

    return A.reduce((a, c) => a + c, 0);
};

// var largestSumAfterKNegations = function (nums, k) {
//     nums.sort((a, b) => a - b);
//     let smallSlice = nums.slice(0, k);
//     let sum = 0;
//     for (let i = 0; i < smallSlice.length; i++) {
//         if (smallSlice[i] === 0) {
//             smallSlice.pop();
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (smallSlice.includes(nums[i])) {
//             sum += nums[i] * -1;
//         } else {
//             sum += nums[i];
//         }
//     }
//     return sum;
// };