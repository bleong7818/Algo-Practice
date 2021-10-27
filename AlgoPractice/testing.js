function minTime(processorTime, taskTime) {
    
    let sorted = taskTime.sort((a, b) => a - b);
    let splitVersion = splitByFour(sorted);
    let orderedProcess = processorTime.sort((b, a) => a - b);
    let max = Infinity;
    for (let i = 0; i < orderedProcess.length; i++) {
        let processor = orderedProcess[i];
        let maxTask = splitVersion[i][3];
        let maxSum = processor + maxTask;
        if (max > maxSum) {
            max = maxSum;
        }
    }
    return max;
}
function splitByFour(array) {
    let splitArray = [];
    for (let i = 4; i <= array.length; i+= 4) {
        let piece = array.slice(i - 4, i);
        splitArray.push(piece);
    }
    return splitArray;
}
const processorTime = [8, 10];
const taskTimes = [2, 3, 1, 2, 5, 8, 4, 3];
console.log(minTime(processorTime, taskTimes));
