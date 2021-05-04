var findTarget = function (root, k) {
    if (!root) return false;
    const sett = new Set();

    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (sett.has(k - node.val)) return true;
        sett.add(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return false;
};