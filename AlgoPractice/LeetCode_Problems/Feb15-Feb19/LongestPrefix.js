// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestPrefix(strs) {
    let firstString = strs[0];
    let otherStrings = strs.splice(1);
    let prefixes = [];
    let splitFirst = firstString.split("");
    for (let i = 0; i < otherStrings.length; i++) {
        const currentWord = otherStrings[i];
        const currentWordSplit = currentWord.split("");
        let currentPrefix = "";
        for (let j = 0; j < currentWordSplit.length; j++) {
            if (splitFirst[j] === currentWordSplit[j]) {
                currentPrefix += splitFirst[j];
            } else {
                prefixes.push(currentPrefix);
                break;
            }
        }
    }

    // prefixes = ['flow', 'fl'];
    let currentLength = prefixes[0].length;
    for (let i = 0; i < prefixes.length; i++) {
        // let currentPrefix = "";
        if (prefixes[i].length < currentLength) {
            currentLength = prefixes[i].length;
            currentPrefix = prefixes[i];
        }
    }

    return currentPrefix.join("");
}