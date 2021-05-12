function isBalanced(bracketString) {
    let open = 0;
    let indexes = [];
    for (let i = 0; i < bracketString.length; i++) {
        if (bracketString[i] === "(") {
            open++;
        }
        else {
            if (open <= 0) {
                indexes.push(i);
                
            }
            else {
                open--;
            }
        }
    }
    return true;
}

let brackets = ")()(";

console.log(isBalanced(brackets));