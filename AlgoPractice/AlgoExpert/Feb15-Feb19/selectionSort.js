function selectionSort(array) {
    let startIdx = 0;
    while (startIdx < array.length - 1) {
        let smallestIdx = startIdx;
        for (let i = startIdx + 1; i < array.length; i++) {
            if (array[smallestIdx] > array[i]) smallestIdx = i;
        }

        swap(startIdx, smallestIdx, array);
        startIdx++;
    }

    return array;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}


function selectionSort(array) {
    let startIdx = 0;
    while (startIdx < array.length - 1) {
        let smallestIdx = startIdx;

        for (let i = startIdx + 1; i < array.length; i++) {
            if (array[i] < array[smallestIdx]) smallestIdx = i;
        }

        const smallNum = array[smallestIdx];
        const swapNum = array[startIdx];
        array[startIdx] = smallNum;
        array[smallestIdx] = swapNum;
        startIdx++;
    }

    return array;

}