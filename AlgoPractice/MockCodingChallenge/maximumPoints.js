function maximumPoints(k, costs) {
    // Write your code here
    costs.sort((a, b) => a - b);
    let points = 0;
    let totalCost = 0;
    for (let i = 0; i < costs.length; i++) {
        if (totalCost <= k) {
            debugger
            totalCost += costs[i];
            points++;
        }
    }
    return points;
}
let costs = [5, 2, 1, 3, 4];
console.log(maximumPoints(10, costs));