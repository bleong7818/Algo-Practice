function maximumContainers(scenarios) {
    if (scenarios.length !== 3) return false;
    let money = scenarios[0];
    let cost = scenarios[1];
    let emptyExchange = scenarios[2];
    let remainder = 0;
    let containers = Math.floor(money / cost);
    let total = containers;
    while (containers > 1) {
        // console.log(containers)
        remainder += (containers % emptyExchange);
        containers = Math.floor(containers / emptyExchange);
        total += containers;
        containers += remainder;
        if (containers < cost) break;
        remainder = 0;
    }
    return total;
}

// 3
// 10 2 5
// 12 4 4
// 6 2 2

// 3 
console.log(maximumContainers([3]));
console.log(maximumContainers([10, 2, 5]));
console.log(maximumContainers([12, 4, 4]));
console.log(maximumContainers([6, 2, 2]));

// 6
// 3
// 5