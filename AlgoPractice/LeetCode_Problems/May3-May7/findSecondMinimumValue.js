var findSecondMinimumValue = function (root) {
    let nodeVals = [];

    function traversal(node) {
        if (!node) return;
        nodeVals.push(node.val);
        if (node.right) traversal(node.right);
        if (node.left) traversal(node.left);
    }
    traversal(root);

    let noDups = [];
    for (let i = 0; i < nodeVals.length; i++) {
        if (!noDups.includes(nodeVals[i])) {
            noDups.push(nodeVals[i]);
        }
    }

    if (noDups.length < 2) return -1;
    noDups.sort((a, b) => a - b);
    return noDups[1];
};