// 1. Find the 2nd largest and 2nd smallest number in two arrays of numbers combined
// I.e. - [10, 5, 7, 2, 4, 1, 24] & [8, 23, 29, 25, 40, 0, 24] -> 2nd Largest: 29, 2nd Smallest: 1

// array1, array2
// array2.push(array1);
// array2.sort((a, b) => a - b);

function get2nds(array1, array2) {
    let mergedArray = array1.concat(array2);

    mergedArray.sort((a, b) => a - b); 
    let results = [];

    results.push(mergedArray[1]);
    results.push(mergedArray[mergedArray.length - 2]);
    return results; // [2nd smallest, 2nd largest]
}
array1 = [10, 5, 7, 2, 4, 1, 24];
array2 = [8, 23, 29, 25, 40, 0, 24];
console.log(get2nds(array1, array2));