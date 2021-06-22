var uniqueOccurrences = function (arr) {
    let hashMap = new Map();

    // oh well
    for (const ele of arr) {
        if (hashMap.has(ele)) {
            hashMap.set(ele, hashMap.get(ele) + 1);
        } else {
            hashMap.set(ele, 1);
        }
    }

    let valuesArray = [];

    for (let value of hashMap.values()) {
        if (valuesArray.includes(value)) {
            return false;
        }
        valuesArray.push(value);
    }


    return true;
};

const arr = [1, 2];
console.log(uniqueOccurrences(arr));