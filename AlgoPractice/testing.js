function grouped(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            // debugger;
            if (s[i - 1] !== "1" && s[i + 1] !== "1"){
                // debugger
                return false;
            } 
        } else {
            if (s[i - 1] !== "0" && s[i + 1] !== "0") {
                // debugger
                return false;
            }
        }
    }
    return true;
}

let string = "100";

console.log(grouped(string));