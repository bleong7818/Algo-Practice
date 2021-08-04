function howMany(sentence) {
    let words = 0;
    let potentialWords = sentence.split(" ");
    for (let i = 0; i < potentialWords.length; i++) {
        if (isWord(potentialWords[i])) words++;
    }

    return words;
}

function isWord(word) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let punctuation = ".,?!";
    for (let i = 0; i < word.length; i++) {
        if (i === word.length - 1) {
            if (!punctuation.includes(word[i]) && !alphabet.includes(word[i])) {
                return false;
            }
        } else {
            if (!alphabet.includes(word[i])) {
                return false;
            }
        }
    }

    return true;
}


let gibberish = "b? Dl )B 4(V! A. MK, YtG ](f 1m )CNxuNUR {PG?";
console.log(howMany(gibberish));