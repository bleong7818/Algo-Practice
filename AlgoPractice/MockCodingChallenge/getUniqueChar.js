function getUniqueCharacter(s) {
    let uniqueMap = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in uniqueMap) {
            uniqueMap[char] = -1;
        }
        else {
            uniqueMap[char] = i + 1;
        }
    }

    for (const char in uniqueMap) {
        if (uniqueMap[char] !== -1) {
            return uniqueMap[char];
        }
    }
    return -1;
}