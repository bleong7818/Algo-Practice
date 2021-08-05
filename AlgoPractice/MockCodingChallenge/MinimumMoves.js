// function minimumMoves(arr1, arr2) {
//     let moves = 0;

//     for (let i = 0; i < arr1.length; i++) {
//         const numArray1 = arr1[i].toString().split("").map(Number);
//         const numArray2 = arr2[i].toString().split("").map(Number);
//         debugger
//         for (let j = 0; j < numArray1.length; j++) {
//             const current1num = numArray1[j];
//             const current2num = numArray2[j];

//             let difference = Math.abs(current2num - current1num);
//             debugger;
//             moves += difference;
//         }
//     }
//     return moves;
// }
// return my soul

function minimumMoves(arr1, arr2) {
    let moves = 0;
    let splitArr1 = arr1.toString().split("").filter((ele) => ele !== ',');
    let splitArr2 = arr2.toString().split("").filter((ele) => ele !== ',');
    for (let i = 0; i < splitArr1.length; i++) {
        const current1num = splitArr1[i];
        const current2num = splitArr2[i];

        let difference = Math.abs(current2num - current1num);
        moves += difference;
    }
    return moves;
}

const arr1 = [123, 543];
const arr2 = [321, 279];
console.log(minimumMoves(arr1, arr2));