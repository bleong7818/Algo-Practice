var preorderTraversal = function (root) {
    if (!root) {
        return [];
    }

    let array = [];
    let stack = [root];

    while (stack.length) {
        let current = stack.pop();

        array.push(current.val);

        if (current.right) {
            stack.push(current.right);
        }

        if (current.left) {
            stack.push(current.left);
        }
    }
    return array;

};