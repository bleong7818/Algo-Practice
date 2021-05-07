var replaceWords = function (dictionary, sentence) {
    let senSplit = sentence.split(" ");
    let newWord = [];
    for (let i = 0; i < senSplit.length; i++) {
        let word = senSplit[i];
        let possibleRoots = [];

        for (let z = 0; z < dictionary.length; z++) {
            let currentRoot = dictionary[z];
            if (word.includes(currentRoot)) {
                possibleRoots.push(currentRoot);
            }
        }
        possibleRoots.sort((a, b) => a.length - b.length);
        if (possibleRoots.length) {
            newWord.push(possibleRoots[0]);
        } else {
            newWord.push(word);
        }
    }
    return newWord.join(" ");
};