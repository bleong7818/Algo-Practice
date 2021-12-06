function funWithAnagrams(text) {
    // Write your code here
    let anagrams = [];

    for (let i = 0; i < text.length; i++) {
        let sortedWord = text[i].split("").sort().join("");
        if (!anagrams[sortedWord]) {
            anagrams[sortedWord] = text[i];
        }
    }

    return Object.values(anagrams).sort();
}

let str = ["code", "doce", "ecod", "framer", "frame"];

console.log(funWithAnagrams(str));
//hello
//yo;lo