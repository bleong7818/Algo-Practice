// var plusOne = function (digits) {
//     let lastDigit = digits[digits.length - 1];

//     let plus1 = lastDigit + 1;

//     digits.pop();
//     // debugger;
//     digits.push(plus1);
//     // debugger;
//     return digits;
// };

// current solution works up to 14 digits

function plusOne (digits) {
    let joined = digits.join("");
    let num = parseInt(joined);
    let newNum = num + 1;
    // debugger;
    // console.log(newNum);
    let splitString = newNum.toString().split("");
    const newArray = [];
    for(let i = 0; i < splitString.length; i++) {
        const numVersion = parseInt(splitString[i]);
        newArray.push(numVersion);
    }
    return newArray;
}

let array = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7];

console.log(plusOne(array));