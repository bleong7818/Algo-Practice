var minSteps = function (s, t) {
    let hashMap = {};

    for (let letter of s) {
        if (hashMap[letter]) {
            hashMap[letter]++;
        }
        else {
            hashMap[letter] = 1;
        }
    }

    let count = 0;
    for (let letter of t) {
        if (hashMap[letter]) {
            hashMap[letter]--;
        }
        else {
            count++;
        }
    }
    return count;
};