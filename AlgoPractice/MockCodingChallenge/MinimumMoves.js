

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