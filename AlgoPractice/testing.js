function itemsSort(items) {
    // Write your code here
    let itemHash = {};
    let newArray = [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (itemHash[item]) {
            itemHash[item]++;
        } else {
            itemHash[item] = 1;
        }
    }

    // for (const key of itemHash) {
    //     if (itemHash[key] = 1) {

    //     }// hello
    // }
    //yoooooooo
    //testing


    console.log(itemHash);
    return getSortedHash(itemHash);
}
function getSortedHash(inputHash) {
    var resultHash = {};

    var keys = Object.keys(inputHash);
    keys.sort(function (a, b) {
        return inputHash[a] - inputHash[b]
    }).forEach(function (k) {
        resultHash[k] = inputHash[k];
    });
    return resultHash;
}
let items = [3, 5, 4, 5, 4, 6];
console.log(itemsSort(items));