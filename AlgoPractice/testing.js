// function findDegree(array) {
//     let degree = 0;
//     const nums = {};
//     // added
//     for (let i = 0; i < array.length - 1; i++) {
//         const currentNum = array[i];
//         if (currentNum in nums) {
//             degree += 1;
//         } else {
//             nums[currentNum] = true;
//         }
//     }
//     return degree;
// }

// function findingDegree(array) {
//     findDegree(array);
//     // console.log("ello");
// }
// here we go
// hoooo boy

// let nums = [1, 2, 2, 2, 3, 1];

function degreeOfArray(arr) {
    // Write your code here
    const nums = {};
    let degree = 1;
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (current in nums) {
            nums[current] += 1;

            if (nums[current] > degree) {
                degree = nums[current];
            }
        }
        else {
            nums[current] = 1;
        }
    }
    highDegrees = [];

    for (const key in nums) {
        if (nums[key] === degree) {
            highDegrees.push(key);
        }
    }

    let length = 0;
    for (let j = 0; j < highDegrees.length; j++) {
        let curr = highDegrees[j];
        let lastIndex = arr.lastIndexOf(curr);
        let firstIndex = arr.indexOf(curr);
        const degreeLength = lastIndex - firstIndex;
        debugger
        if (length < degreeLength) {
            length = degreeLength;
        }
    }
    return length;
}
let nums1 = [1, 2, 3, 2, 1];
console.log(nums1.indexOf(1));
console.log(nums1.lastIndexOf(1));
console.log(degreeOfArray(nums1));

