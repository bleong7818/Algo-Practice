function inArray(array1, array2) {
    let newArray = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j].includes(array1[i])) {
                if (!newArray.includes(array1[i])) {
                    newArray.push(array1[i]);
                }
            }
        }
    }

    return newArray.sort();
}