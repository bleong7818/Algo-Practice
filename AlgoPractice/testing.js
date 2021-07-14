let string = "loveleetcode";

var firstUniqChar = function (s) {
    let charMap = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (charMap[char] || charMap[char] === 0) {
            charMap[char] = "dup";
        } else {
            charMap[char] = i;
        }
    }

    for (let j = 0; j < s.length; j++) {
        let mapChar = s[j];
        // debugger
        if (charMap[mapChar] !== "dup") {
            return j;
        }
    }

    return -1;
};

console.log(firstUniqChar(string));