var levelOrder = function (root) {
    if (!root) return [];
    let result = [];
    let stack = [root];
    while (stack.length > 0) {
        let length = stack.length;
        let currentLevel = [];
        for (let i = 0; i < length; i++) {
            let currentNode = stack.shift();
            if (currentNode.left) stack.push(currentNode.left);
            if (currentNode.right) stack.push(currentNode.right);
            currentLevel.push(currentNode.val);
        }
        result.push(currentLevel);
    }
    return result;
};