//Time: O(n)

//Return true if the sequence can be found in the larger array in the same order
//{"array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, 10]}
// returns true because that sequence is a part of the array

function isValidSequence(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) {
            seqIdx += 1;
        }
        arrIdx += 1;
    }
    return seqIdx === sequence.length;
}