// Two Number Sum
// Find the first two numbers that sum up to the target sum, else return []
// { "array": [3, 5, -4, 8, 11, 1, -1, 6], "targetSum": 10 }
// answer would be [11, -1]

//first solution: time = On^2

function twoNumberSum(array, targetSum) {

    for (let i = 0; i < array.length - 1; i++) {
        const firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
    return [];
}
