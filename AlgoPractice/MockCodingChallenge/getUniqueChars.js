function getUniqueCharacter(s) {
    // Write your code here
    let charMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (charMap.has(s[i])) {
            charMap.set(s[i], charMap.get(s[i]) + 1);
        } else {
            charMap.set(s[i], 1);
        }
    }

    for (const [key, value] of charMap) {
        if (value === 1) {
            return s.indexOf(key) + 1;
        }
    }
    return -1;
}