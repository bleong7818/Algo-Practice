function scramble(str1, str2) {
    let str1Map = {};
    let str2Map = {};
    for (let i = 0; i < str1.length; i++) {
        const letter = str1[i];
        if (letter in str1Map) {
            str1Map[letter]++;
        }
        else {
            str1Map[letter] = 1;
        }
    }
    for (let j = 0; j < str2.length; j++) {
        const letter = str2[j];
        if (letter in str2Map) {
            str2Map[letter]++;
        }
        else {
            str2Map[letter] = 1;
        }
    }
    for (const key in str2Map) {
        if (!(key in str1Map)) return false;
        if (str2Map[key] > str1Map[key]) {
            return false;
        }
    }
    return true;
}
console.log(scramble('katas', 'steak'));
// console.log(scramble('cedewaraaossoqqyt', 'codewars'));