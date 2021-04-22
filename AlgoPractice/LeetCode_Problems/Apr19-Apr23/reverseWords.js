var reverseWords = function (s) {
    let noSpaces = s.split(" ");
    let newWord = [];
    for (let i = 0; i < noSpaces.length; i++) {
        const word = noSpaces[i];
        let reversed = word.split("").reverse().join("");
        newWord.push(reversed);
    }

    return newWord.join(" ");
};