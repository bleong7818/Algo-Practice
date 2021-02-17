function bubbleSort(array) {
    // Write your code here.
    let sorted = false;
    // let counter = 0;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let num = array[i];
                array[i] = array[i + 1];
                array[i + 1] = num;
                sorted = false;
            }
        }
        // counter++;
    }

    return array;
}