var minAddToMakeValid = function (S) {
    let validLength = 0;
    let open = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "(") {
            open++;
        }
        else {
            if (open === 0) {
                validLength++;
            }
            else {
                open--;
            }
        }
    }
    return open + validLength;
};