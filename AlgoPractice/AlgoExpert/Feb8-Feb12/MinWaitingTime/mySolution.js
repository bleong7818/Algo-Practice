//Min waiting time given a non empty array of integers
//{"queries": [3, 2, 1, 2, 6]} 
// sorted = [1, 2, 2, 3, 6]
//output = 17 = (0 + 1 + 3 + 5 + 8)

0 + q[0] + (q[0] + q[1]) + (q[0] + q[1] + q[2]) + (q[0] + q[1] + q[2] + q[3])


function minimumWaitingTime(queries) {
    // Write your code here.
    queries.sort((a, b) => a - b);
    let totalWaitingTime = queries[0];
    for (let i = 1; i < queries.length - 1; i++) {
        const currentNum = queries[i];
        let newWaitingTime = currentNum + totalWaitingTime;
        totalWaitingTime += newWaitingTime;
    }
    return totalWaitingTime;
}

let testing = [3, 2, 1, 2, 6];
console.log(minimumWaitingTime(testing));