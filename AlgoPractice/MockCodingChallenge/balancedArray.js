function balancedSum(arr) {
    // Write your code here
    for (let i = 0; i < arr.length; i++) {
        let leftSlice = arr.slice(0, i);
        let rightSlice = arr.slice(i + 1);

        if (sum(leftSlice) === sum(rightSlice)) {
            return i;
        }
    }
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}