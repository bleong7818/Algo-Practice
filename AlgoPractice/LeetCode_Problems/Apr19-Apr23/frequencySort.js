var frequencySort = function (s) {
    let newString = "";
    let charMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        }
        else {
            charMap.set(char, 1);
        }
    }
    let sortedCharMap = new Map([...charMap.entries()].sort((a, b) => b[1] - a[1]));

    sortedCharMap.forEach(function (value, key) {
        newString += key.repeat(value);
    });
    return newString;
};