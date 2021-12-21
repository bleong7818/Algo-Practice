// Program to find the most repeated word in a string and the count of the word
// “Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on. ”

function wordCount(string) {
    let words = string.split(" ");

    let wordCountHash = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word in wordCountHash) {
            wordCountHash[word] += 1;
        } else {
            wordCountHash[word] = 1;
        }
    }

    let count = 0;
    let mostCommonString = "";
    for (const key in wordCountHash) {
        if (wordCountHash[key] > count) {
            count = wordCountHash[key];
            mostCommonString = key;
        }
    }

    return [count, mostCommonString];
}
let example = 'Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on';
console.log(wordCount(example));