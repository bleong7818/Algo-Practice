var canConstruct = function (ransomNote, magazine) {
    const ransomHash = {};
    const magazineHash = {};

    for (let i = 0; i < ransomNote.length; i++) {
        let letter = ransomNote[i];
        if (letter in ransomHash) {
            ransomHash[letter]++;
        } else {
            ransomHash[letter] = 1;
        }
    }

    for (let i = 0; i < magazine.length; i++) {
        let letter = magazine[i];
        if (letter in magazineHash) {
            magazineHash[letter]++;
        } else {
            magazineHash[letter] = 1;
        }
    }

    for (const key in ransomHash) {
        if (!magazineHash[key]) return false;
        if (ransomHash[key] > magazineHash[key]) return false;
    }
    return true;
};
