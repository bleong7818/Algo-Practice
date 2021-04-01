function longest(s1, s2) {
    // your code
    const sortedS1 = removeDups(s1);
    const sortedS2 = removeDups(s2);

    const newSortedString = sortedS1 + sortedS2;
    return removeDups(newSortedString);
}

function removeDups(string) {
    const splitString = string.split("");
    let newString = [];

    for (const char of splitString) {
        if (!newString.includes(char)) {
            newString.push(char);
        }
    }
    return newString.sort().join("");
}