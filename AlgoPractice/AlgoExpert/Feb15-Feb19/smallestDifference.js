function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let oneIdx = 0;
    let twoIdx = 0;
    let current = Infinity;
    let smallest = Infinity;
    let smallestPair = [];
    while (oneIdx < arrayOne.length && twoIdx < arrayTwo.length) {
        let oneNum = arrayOne[oneIdx];
        let twoNum = arrayTwo[twoIdx];
        if (oneNum > twoNum) {
            current = oneNum - twoNum;
            twoIdx++;
        }
        else if (oneNum < twoNum) {
            current = twoNum - oneNum;
            oneIdx++;
        }
        else {
            return [oneNum, twoNum];
        }
        if (smallest > current) {
            smallest = current;
            smallestPair = [oneNum, twoNum];
        }
    }
    return smallestPair;
}