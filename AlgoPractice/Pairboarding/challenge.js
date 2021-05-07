// ROT-N 0-25
// abc -> ROT-1 -> bcd
// abc -> ROT-2 -> cde
// xyz -> ROT-1 -> yza
// adz -> ROT-3 -> dgc
//
// Given a list, find groups of strings that are rotations of each other.
// Input: ["abbc", "bccd", "cat", "zaab", "yell", "bzs", "catch"]

// Output: [ ["abbc", "bccd", "zaab"], ["cat", "bzs"] ]
// let finalResults = [];

// if (finalResults.includes(string)) {
//     move on
// }

// is A isRotation(B) {
//     sameSet.push(B)
// }


const alphabet = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e:': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j': 9,
    'k': 10,
    'l': 11,
    'm': 12,
    'n': 13,
    'o': 14,
    'p': 15,
    'q': 16,
    'r': 17,
    's': 18,
    't': 19,
    'u': 20,
    'v': 21,
    'w': 22,
    'x': 23,
    'y': 24,
    'z': 25
}

function isRotation(string1, string2) {
    // if (a.length !== b.length) return false;
    // let rotationNum = alphabet[a[0]] - alphabet[b[0]];
    // for(let i = 0; i < a.length; i++) {
    //     let aChar = a[i];
    //     let bChar = b[i];
    //     let currentRotation = alphabet[aChar] - alphabet[bChar];
    //     if (currentRotation !== rotationNum) return false;
    // }
    // return true;
    if (string1.length !== string2.length || typeof string1 !== 'string' || typeof string2 !== 'string') return false;
    if (string1 === string2) return true

    const difference = alphabet[string1[0].toLowerCase()] - alphabet[string2[0].toLowerCase()];
    const splitString = string1.split('');

    splitString.forEach((letter, idx) => {
        let testLetter = alphabet[letter.toLowerCase()] + difference
        if (alphabet[string2[idx].toLowerCase()] !== testLetter) return false
    })
    return true
}

function rotationArray(array) {
    let finalResults = new Set

    for (let i = 0; i < array.length; i++) {
        let currentString = array[i];
        let possibleRotations = [];
        for (let j = i + 1; j < array.length; j++) {
            let otherString = array[j];
            if (isRotation(currentString, otherString)) {
                if (possibleRotations.includes(currentString)) {
                    possibleRotations.push(otherString);
                } else {
                    possibleRotations.push(currentString);
                    possibleRotations.push(otherString);
                }
            }
        }
        if (possibleRotations.length > 0) {
            finalResults.push(possibleRotations);
        }
    }
    return finalResults;
}

// console.log(isRotation("abbc", "zaab"));
console.log(rotationArray(["abbc", "bccd", "cat", "zaab", "yell", "bzs", "catch"])); // Output: [ ["abbc", "bccd", "zaab"], ["cat", "bzs"] ]
//python set = (1,2,3)
// const matchesSet = new Set
// Array.from(matchesSet)

function rotationSets(array) {
    const answerArray = [];
    i = 0;
    j = 1;
    let setOfMatches = new Set;

    while (i < array.length && array.length > 1 && j < array.length) {

        if (array[j] && isRotationMatch(array[i], array[j]) && i !== j) {
            setOfMatches.add(array[i]);
            setOfMatches.add(array[j]);

            array.splice(j, 1);
            i = 0;
            j = 1;
        }
        if (j === array.length - 1) {

            if (setOfMatches.size > 1) {
                answerArray.push(Array.from(setOfMatches));
                setOfMatches = new Set;
            }
            j = 1;
            i++;
        }

        j++

    }
    return answerArray
}