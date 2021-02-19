function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let sumArrays = [];

    for (let i = 0; i < array.length - 2; i++) {
        let currentNum = array[i];
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {
            const currentSum = currentNum + array[left] + array[right];
            if (currentSum === targetSum) {
                sumArrays.push([currentNum, array[left], array[right]]);
                left++;
                right--;
            }
            else if (currentSum < targetSum) {
                left++;
            }
            else if (currentSum > targetSum) {
                right--;
            }
        }
    }

    return sumArrays;
}
