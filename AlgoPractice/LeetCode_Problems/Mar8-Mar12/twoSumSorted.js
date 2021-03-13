var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let leftNum = numbers[left];
        let rightNum = numbers[right];

        if ((leftNum + rightNum) > target) {
            right--;
        }

        if ((leftNum + rightNum) < target) {
            left++;
        }

        if ((leftNum + rightNum) === target) {
            return [left + 1, right + 1];
        }
    }
};