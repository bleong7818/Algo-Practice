function groupAnagrams(words) {
    let anagramHash = {};
    for (const word of words) {
        let sortedWord = word.split('').sort().join('');
        if (sortedWord in anagramHash) {
            anagramHash[sortedWord].push(word);
        }
        else {
            anagramHash[sortedWord] = [word];
        }
    }
    return Object.values(anagramHash);
}
//useful
let words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
console.log(groupAnagrams(words));
let $h = [1];
console.log($)
// Output = [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
