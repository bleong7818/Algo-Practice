//Time: O(n)

//Return true if the sequence can be found in the larger array in the same order
//{"array": [5, 1, 22, 25, 6, -1, 8, 10], "sequence": [1, 6, -1, 10]}
// returns true because that sequence is a part of the array

function isValidSubsequence(array, sequence) {
    let seqIdx = 0;
    for (const num of array) {
        if (seqIdx === sequence.length) break;
        if (sequence[seqIdx] === num) {
            seqIdx += 1;
        }
    }

    return seqIdx === sequence.length;
}