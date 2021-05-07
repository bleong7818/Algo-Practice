var findBottomLeftValue = function (root) {
    if (root.length === 1) return root.val;
    let stack = [root];
    let result;

    while (stack.length) {
        let currentLength = stack.length;
        let node;
        for (let i = 0; i < currentLength; i++) {
            node = stack.shift();
            if (i === 0) result = node.val;
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
    }
    return result;
};