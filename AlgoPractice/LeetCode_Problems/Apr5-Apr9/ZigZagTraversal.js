var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let result = [];
    let stack = [root];
    let currDir = 'right';

    while (stack.length > 0) {
        let nextLevel = [];
        let currentVal = [];
        while (stack.length > 0) {
            let currentNode = stack.pop();
            if (!currentNode) continue;
            currentVal.push(currentNode.val);

            if (currDir === 'right') {
                nextLevel.push(currentNode.left);
                nextLevel.push(currentNode.right);
            }
            else {
                nextLevel.push(currentNode.right);
                nextLevel.push(currentNode.left);
            }
        }
        stack = nextLevel;
        if (currentVal.length > 0) {
            result.push(currentVal);
        }
        currDir = currDir === 'right' ? 'left' : 'right';
    }
    return result;
};