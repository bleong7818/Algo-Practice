var convertBST = function (root) {
    const stack = [];
    let node = root;
    let sum = 0;

    while (stack.length || node) {
        while (node) {
            stack.push(node);
            node = node.right;
        }

        node = stack.pop();
        sum += node.val;
        node.val = sum;
        node = node.left;
    }

    return root;
};