var averageOfLevels = function (root) {
    let stack = [root];
    let node = root;
    let averages = [];

    while (stack.length) {
        let curLevelLength = stack.length;
        let average = 0;
        for (let i = 0; i < curLevelLength; i++) {
            node = stack.shift();
            average += node.val;
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
        average = average / curLevelLength;
        averages.push(average);
    }
    return averages;
};