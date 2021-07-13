let string = "0100111";

function areEqual(s) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            oneCount++;
        } else {
            zeroCount++;
        }
    }
    return zeroCount === oneCount;
}

function grouped(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            if (s[i - 1] !== "1" && s[i + 1] !== "1") return false;
        } else {
            if (s[i - 1] !== "0" && s[i + 1] !== "0") return false;
        }
    }
    return true;
}

console.log(grouped(string));