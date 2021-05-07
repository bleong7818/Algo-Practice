function moveElementToEnd(array, toMove) {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        while (i < j && array[j] === toMove) j--;
        if (array[i] === toMove) {
            let current = array[i];
            array[i] = array[j];
            array[j] = current;
        }
        i++;
    }
    return array;
}