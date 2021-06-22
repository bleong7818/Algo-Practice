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
    let greatest = -Infinity;

    for (const ele of array) {
        if (ele > greatest) {
            greatest = ele;
        }
    }
    return greatest;
}