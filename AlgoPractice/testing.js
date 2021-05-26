var replaceElements = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            arr[i] = -1;
        } else {
            let right = arr.slice(i + 1);
            let greatest = findGreatest(right);
            arr[i] = greatest;
        }
    }
    return arr;
};

function findGreatest(array) {
    array.sort((a, b) => b - a);
    return array[0]
}

const arr = [17, 18, 5, 4, 6, 1];

// console.log(replaceElements(arr));
console.log(findGreatest(arr));