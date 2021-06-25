function slowestKey(keyTimes) {
    let slowest = keyTimes[0][1];
    let key = keyTimes[0][0];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < keyTimes.length - 1; i++) {
        let current = keyTimes[i];
        let next = keyTimes[i + 1];
        debugger;
        let time = next[1] - current[1];
        if (time > slowest) {
            slowest = time;
            key = next[0];
            debugger;
        }
    }

    return alphabet[key];
}
let keyTimes = [[0, 3], [20, 5], [2, 6], [15, 7], [9, 8]];

// 0 3
// 20 5
// 2 6
// 15 7
// 9 8
// 19 9
// 24 10
// 4 12
// 3 13
console.log(slowestKey(keyTimes));
