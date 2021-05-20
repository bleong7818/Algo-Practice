var bitwiseComplement = function (n) {
    const binaryVer = n.toString(2);
    debugger;
    for (let i = 0; i < binaryVer.length; i++) {
        if (binaryVer[i] === "0") {
            debugger;
            binaryVer[i] = "1";
        } else {
            debugger;
            binaryVer[i] = "0";
        }
    }
    debugger;

    return parseInt(binaryVer, 2);
};

const n = 5;

console.log(bitwiseComplement(n));