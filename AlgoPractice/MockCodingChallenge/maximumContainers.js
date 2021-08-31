function maximumContainers(scenarios) {
    if (scenarios.length !== 3) return false;
    let money = scenarios[0];
    let cost = scenarios[1];
    let emptyExchange = scenarios[2];
    let remainder = 0;
    let containers = Math.floor(money / cost);
    let total = containers;
    while (containers > 1) {
        
        remainder += (containers % emptyExchange);
        containers = Math.floor(containers / emptyExchange);
        total += containers;
        containers += remainder;
        if (containers < cost) break;
        remainder = 0;
    }
    return total;
}