function getUmbrellas(requirement, sizes) {
    // Write your code here
    const nums = {};
    let n = 0;
    debugger;
    for (let i = 0; i < sizes.length; i++) {
        const current = sizes[i];
        const potential = requirement - current;
        debugger;
        if (current === requirement) {
            n += 1;
        }
        else if (potential in nums) {
            n += 2;
        }
        else {
            nums[current] = true;
        }
    }

    if (n === 0) return -1;
    return n;
}

console.log(getUmbrellas(4, [2, 4]));