//Min waiting time given a non empty array of integers
//{"queries": [3, 2, 1, 2, 6]} 
// sorted = [1, 2, 2, 3, 6]
//output = 17 = (0 + 1 + 3 + 5 + 8)


function minimumWaitingTime(queries) {
    // Write your code here.
    queries.sort((a, b) => a - b);
    let totalWaitingTime = 0;
    for (let i = 0; i < queries.length; i++) {
        const duration = queries[i];
        const queriesLeft = queries.length - (i + 1);
        totalWaitingTime += duration * queriesLeft;
        debugger;
    }
    return totalWaitingTime;
}

let testing = [3, 2, 1, 2, 6];
console.log(minimumWaitingTime(testing));
