function comp(array1, array2) {
    if (array1 === null || array2 === null) return false;
    let sortedA1 = array1.sort((a, b) => a - b);
    let sortedA2 = array2.sort((a, b) => a - b);

    for (let i = 0; i < sortedA1.length; i++) {
        const squared = sortedA1[i] * sortedA1[i];
        if (squared !== sortedA2[i]) {
            return false;
        }
    }

    return true;
}