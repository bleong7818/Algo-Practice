function insertionSort(array) {
    // Write your code here.
    for (let i = 0; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            let num = array[j];
            array[j] = array[j - 1];
            array[j - 1] = num;
            j -= 1;
        }
    }

    return array;
}