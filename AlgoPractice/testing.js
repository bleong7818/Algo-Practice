var replaceWords = function (dictionary, sentence) {
    let senSplit = sentence.split(" ");
    let newWord = [];
    for (let i = 0; i < senSplit.length; i++) {
        let word = senSplit[i];
        let possibleRoots = [];
        debugger
        for (let z = 0; z < dictionary.length; z++) {
            let currentRoot = dictionary[z];
            debugger
            if (word.includes(currentRoot)) {
                debugger
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

let dictionary = ["cat", "bat", "rat"], sentence = "the cattle was rattled by the battery";
console.log(replaceWords(dictionary, sentence));
// console.log(dictionary.includes("cat"));