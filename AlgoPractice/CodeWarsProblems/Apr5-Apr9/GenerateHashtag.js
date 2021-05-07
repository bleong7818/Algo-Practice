function generateHashtag(str) {
    if (!str) return false;
    let newWord = [];
    let splitString = str.split(" ");

    for (let i = 0; i < splitString.length; i++) {
        const word = splitString[i].split("");
        if (word.length > 1) {
            let firstLetter = word[0].toUpperCase();
            let remaining = word.splice(1, word.length - 1).join("");
            newWord.push(firstLetter + remaining);
        }
        else {
            newWord.push(splitString[i].toUpperCase());
        }
    }
    let joinedWord = "#" + newWord.join("");
    if (joinedWord.length === 1) return false;
    if (joinedWord.length <= 140) return joinedWord;
    return false;
}

console.log(generateHashtag(" ".repeat(200)));