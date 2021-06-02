function countStudents(height) {
    // let originalArray = original(height);
    let originalArray = [...height];
    let correctOrder = height.sort();
    let outOfPlace = 0;
    for (let i = 0; i < height.length; i++) {
        if (correctOrder[i] !== originalArray[i]) {
            outOfPlace++;
        }
    }

    return outOfPlace;
}

const height = [1, 1, 3, 3, 4, 1];
console.log(countStudents(height));