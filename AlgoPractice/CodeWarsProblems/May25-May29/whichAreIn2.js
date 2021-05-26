function inArray(array1, array2) {
    let areIn = [];

    for (const ele of array1) {
        for (const ele2 of array2) {
            if (ele2.includes(ele) && !areIn.includes(ele)) {
                areIn.push(ele);
            }
        }
    }

    return areIn.sort();
}