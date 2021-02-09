// Two Number Sum
// Find the first two numbers that sum up to the target sum, else return []
// { "array": [3, 5, -4, 8, 11, 1, -1, 6], "targetSum": 10 }
// answer would be [11, -1]

//second solution: O(n) time, O(n) space

function twoNumberSum(array, targetSum) {
    const nums = {};
    for (const num of array) {
        const potential = targetSum - num;
        if (potential in nums) {
            return [potential, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}