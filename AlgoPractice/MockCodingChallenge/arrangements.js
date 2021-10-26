

function arrangements(n) {
    let orderedArray = [];
    for (let i = 1; i <= n; i++) {
        orderedArray.push(i);
    }
    let permutations = combinations(orderedArray);
    let beautifulCombos = 0;
    for (let i = 0; i < permutations.length; i++) {
        if (isBeautiful(permutations[i])) {
            beautifulCombos++;
        }
    }
    return beautifulCombos;
}

function createArray(num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i);
    }
    return array;
}

function isBeautiful(array) {
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        if ((currentNum % (i + 1) !== 0) && (i + 1) % currentNum !== 0) {
            return false;
        }
    }
    return true;
}

function combinations(array) {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    }
    permute(array);
    return result;
}

// console.log(combinations([1, 2, 3]));
console.log(arrangements([2]));
// console.log(createArray(2));