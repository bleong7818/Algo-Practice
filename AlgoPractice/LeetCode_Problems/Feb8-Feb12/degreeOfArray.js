function findDegree(array) {
    let degree = 0;
    const nums = {};
    // added
    for (let i = 0; i < array.length - 1; i++) {
        const currentNum = array[i];
        if (currentNum in nums) {
            degree += 1;
        } else {
            nums[currentNum] = true;
        }
    }
    return degree;
}

// function findingDegree(array) {
//     findDegree(array);
//     // console.log("ello");
// }
// here we go

let nums = [1, 2, 2, 2, 3, 1];
findDegree(nums);

