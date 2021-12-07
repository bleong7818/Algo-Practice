
function reductionCost(num) {
    // Write your code here
    num.sort((a, b) => a - b);
    let cost = 0;

    while (num.length > 1) {
        let num1 = num[0];
        let num2 = num[1];
        let sum = num1 + num2;
        cost += sum;
        const sliced = num.slice(2);
        num = sliced;
        sliced.push(sum);
        num.sort((a, b) => a - b);
    }
    return cost;
}
//yoyoyo