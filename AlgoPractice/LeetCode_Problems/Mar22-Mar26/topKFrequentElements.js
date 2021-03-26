var topKFrequent = function (nums, k) {
    let frequencyHash = {};

    for (const num of nums) {
        if (num in frequencyHash) {
            frequencyHash[num] += 1;
        }
        else {
            frequencyHash[num] = 1;
        }
    }
    let frequencyArrayValues = [];

    for (const key in frequencyHash) {
        frequencyArrayValues.push([frequencyHash[key], key]);
    }

    frequencyArrayValues.sort((a, b) => a[0] - b[0]);
    console.log(frequencyArrayValues);

    let newArray = Array();
    for (let i = frequencyArrayValues.length - 1; i >= frequencyArrayValues.length - k; i--) {
        newArray.push(frequencyArrayValues[i][1]);
    }
    return newArray;
    // for (const key in frequencyHash) {
    //     const index = frequencyArrayValues.indexOf(frequencyHash[key])
    //     newArray[index] = key;
    //     frequencyArrayValues[index] = 0;
    // }
    // return newArray.slice(newArray.length - k, newArray.length);
};