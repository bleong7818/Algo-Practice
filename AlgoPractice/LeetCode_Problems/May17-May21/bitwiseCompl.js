var bitwiseComplement = function (n) {
    let binaryVer = n.toString(2);
    let newVer = [];
    for (let i = 0; i < binaryVer.length; i++) {
        if (binaryVer[i] === "0") {
            newVer.push("1");
        } else {
            newVer.push("0");
        }
    }

    return parseInt(newVer.join(""), 2);
};