function deleteProducts(ids, m) {
    // Write your code here
    let numHash = {};
    // debugger;
    for (let i = 0; i < ids.length; i++) {
        if (numHash[ids[i]]) {
            numHash[ids[i]]++;
        }
        else {
            numHash[ids[i]] = 1;
        }
    }

    let valuesArray = Object.values(numHash);

    while (m > 0) {
        let current = 1;
        for (let i = 0; i < valuesArray.length; i++) {
            if (valuesArray[i] === current) {
                valuesArray.splice(i, 1);
                m--;
                // debugger;
            }

            if (m === 1) {
                return valuesArray.length;
            }
        }
        if (m > 1) {
            current++;
        }
        // current++;
    }
    return valuesArray.length;
}

let nums = [1, 1, 1, 2, 2, 3];
// nums.splice(1, 1);
let m = 2;
// console.log(nums);

console.log(deleteProducts(nums, m));