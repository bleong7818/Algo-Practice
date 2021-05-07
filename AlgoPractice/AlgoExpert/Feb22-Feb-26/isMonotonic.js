function isMonotonic(array) {
    let i = 1;
    let dec = false;
    let inc = false;

    while (i < array.length) {
        let diff = array[i] - array[i - 1];
        if (diff > 0) {
            inc = true;
        }
        else if (diff < 0) {
            dec = true;
        }

        if (inc && dec) {
            return false;
        }
        i++;
    }
    return true;
}
