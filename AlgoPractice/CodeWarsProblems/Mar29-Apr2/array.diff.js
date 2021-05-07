function arrayDiff(a, b) {
    // if (b.length === 0) return a;
    let newArray = [];
    for (const num of a) {
        if (!b.includes(num)) {
            newArray.push(num);
        }
    }
    return newArray;
}